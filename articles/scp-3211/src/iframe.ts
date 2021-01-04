import { applyPatch } from "diff"
import Cookies from "js-cookie"

import { anomalyNames, langs } from "./config"
import { rot13 } from "./rot13"

// Defined in iframe.ejs.html
declare const reference: string[]
declare const anomalies: { [anomaly in typeof anomalyNames[number]]: string }
declare const lang: keyof typeof langs

const sections = <const>["warning", "loading", "anomaly"]
type section = typeof sections[number]

type cookies = {
  "anomaly": typeof anomalyNames[number] // Which anomaly to show
  "seen": "true" | "false" // Tracks whether user has seen base anomaly
  "timerExpiresAt": string // Time that timer will end (or has ended)
}

const readTime = 360
let read = false
let anomaly: typeof anomalyNames[number]

let timerInterval: number

function remember <C extends keyof cookies> (key: C, value: cookies[C]): void {
  /**
   * Stores a value to a cookie.
   *
   * @param key: The key to store against.
   * @param value: The value to store.
   */
  console.log(`Saving ${value} to ${key}`)
  Cookies.set(key, value, { expires: 356 })
  document.getElementById("anomalyCookie")!.textContent = `Current: ${anomaly}`
  document.getElementById("otherCookies")!.textContent = (
    `seen ${recall("seen")}, timer ${recall("timerExpiresAt")}`
  )
}

function recall <C extends keyof cookies> (key: C): cookies[C] {
  /**
   * Retrives a value from cookies.
   *
   * @param key: The key to look up.
   */
  return <cookies[C]>Cookies.get(key)
}

function forget (key: keyof cookies): void {
  /**
   * Removes a remembered value.
   *
   * @param key: The key to destroy.
   */
  console.log(`Forgot ${key} (was ${recall(key)})`)
  Cookies.remove(key)
}

function forgetEverything (reloadPageAfter: boolean): void {
  /**
   * Completely forget everything.
   *
   * @param reloadPageAfter: Whether or not to reload the page after forgetting
   * everything.
   */
  console.log("Forgetting everything...")
  forget("anomaly")
  forget("seen")
  forget("timerExpiresAt")
  if (reloadPageAfter) {
    history.go(0)
  }
}

// TODO Remove export; bind to footnote after making footnote component
export function hoverdiv (event: MouseEvent): boolean {
  const top = `${event.clientY + 10}px`
  const hovertip = document.getElementById("hovertip")!
  hovertip.style.left = "0"
  hovertip.style.top = top
  // TODO Choose by whether or not it's in or out
  if (hovertip.style.display === "none") {
    hovertip.style.display = "block"
  } else {
    hovertip.style.display = "none"
  }
  // XXX What's this for?
  return false
}

window.addEventListener('load', () => {
  if (recall("anomaly")) {
    anomaly = recall("anomaly")
    console.log(`Previous anomaly ${anomaly} detected from cookie`)
  } else {
    console.log("Initialising anomaly")
    // Pick a random anomaly, except for the base anomaly
    do {
      anomaly = <keyof typeof anomalies>Object.keys(anomalies)[
        Math.floor(Math.random() * (Object.keys(anomalies).length))
      ]
    } while (anomaly === "base")
  }
  console.log(`Viewing ${anomaly}`)
  remember("anomaly", anomaly)

  // Add some listeners while we wait for user input

  // Hidden button that opens secret menu
  document.getElementById("authorise")?.addEventListener("click", () => {
    document.getElementById("buttons")?.classList.remove("hidden")
  })

  // Reset and forget
  document.getElementById("reset")?.addEventListener("click", () => {
    forgetEverything(true)
  })

  // Manually stop the anomaly timer
  document.getElementById("stopTimer")?.addEventListener("click", () => {
    console.log("Stopping timer...")
    clearInterval(timerInterval)
    console.log("Stopped.")
  })

  // Forget that the anomaly has been seen
  document.getElementById("ignoreSeen")?.addEventListener("click", () => {
    remember("seen", "false")
  })

  // Generate buttons to manually change the anomaly
  const buttons = document.getElementById("anomalyButtons");
  (<(keyof typeof anomalies)[]>Object.keys(anomalies)).forEach(anomalyName => {
    const button = document.createElement("button")
    button.type = "button"
    button.addEventListener("click", () => {
      anomaly = anomalyName
      console.log(`Anomaly manually set to ${anomaly}`)
      remember("anomaly", anomaly)
    })
    buttons?.appendChild(button)
  })

  // Proceed from the warning section
  document.getElementById("proceed")?.addEventListener("click", function () {
    nextSection("loading")

    if (recall("seen") === "true") {
      // If the anomaly has already been seen, skip to review
      anomaly = "base"
    }

    setTimeout(() => nextSection("anomaly"), 1200)

    // TODO Recreate collapsible continuity
  })
})

function nextSection (toSection: section) {
  /**
   * Moves the reader onto the next section of the article.
   *
   * @param toSection: The section to switch to.
   */
  console.log(`Now in section ${toSection}`)

  if (toSection === "anomaly") {
    // Construct the anomaly
    document.getElementById("anomaly")!.innerHTML = (
      langs[lang].rot13 ? rot13 : (source: string) => source
    )(applyPatch(
      reference.join("\n"), anomalies[anomaly]
    )).replace(/--/g, "—")

    // Click "read" if you've read the document and want the timer to end
    // Listener has to be added after the anomaly has been constructed -
    // the markup is in the anomaly document
    document.getElementById("read")?.addEventListener("click", () => {
      read = true
    })
  }

  sections.map(hideSection)
  showSection(toSection)

  // If the base anomaly has now been seen, remember that
  if (toSection === "anomaly" && anomaly === "base") {
    remember("seen", "true")
  }

  // If this is a false anomaly, set up the timer
  if (toSection === "anomaly") {
    let secondsRemaining: number
    if (recall("timerExpiresAt")) {
      console.log("Resuming previous timer.")
      secondsRemaining = Math.floor((
        new Date(recall("timerExpiresAt")).getTime() - new Date().getTime()
      ) / 1000)
    } else {
      remember(
        "timerExpiresAt",
        new Date(Date.now() + readTime * 1000).toString()
      )
      secondsRemaining = readTime
    }

    const timer = document.getElementById("timer")!
    timerInterval = window.setInterval(function () {
      if (secondsRemaining <= 0) {
        clearInterval(timerInterval)
        anomaly = "base"
        nextSection("anomaly")
        forget("timerExpiresAt")
      } else {
        // If the user has clicked 'read', reduce the time remaining
        if (read && secondsRemaining > 5) {
          secondsRemaining = 6
        }
        const colour = secondsRemaining / readTime
        console.log(
          `%c${secondsRemaining}s`,
          `color: rgba(${
            255 - Math.ceil((colour) * 255)
          },${
            Math.ceil((colour) * 255)
          },0,1); font-size:15px;`
        )
        --secondsRemaining

        const minutes = Math.floor(secondsRemaining / 60)
        const seconds = secondsRemaining - minutes * 60
        timer.textContent = `${
          minutes.toString().padStart(2, "0")
        }:${
          seconds.toString().padStart(2, "0")
        }`
      }
    }, 1000)
  }
}

function showSection (section: section): void {
  document.getElementById(section)!.classList.remove("hidden")
}

function hideSection (section: section): void {
  document.getElementById(section)!.classList.add("hidden")
}
