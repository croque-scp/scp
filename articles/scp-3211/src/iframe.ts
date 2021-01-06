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

const openCollapsibles: boolean[] = []

const preferredStorageMethod = (() => {
  try {
    localStorage.getItem("test")
    return "localStorage"
  } catch (error) {
    return "cookies"
  }
})()

function remember <C extends keyof cookies> (key: C, value: cookies[C]): void {
  /**
   * Stores a value.
   *
   * @param key: The key to store against.
   * @param value: The value to store.
   */
  console.log(`[${preferredStorageMethod}] Saving ${value} to ${key}`);
  ({
    cookies: () => Cookies.set(key, value, { expires: 356 }),
    localStorage: () => localStorage.setItem(key, value)
  })[preferredStorageMethod]()
  document.getElementById("anomalyCookie")!.textContent = anomaly
  document.getElementById("otherCookies")!.textContent = (
    `seen ${recall("seen")}, timer ${recall("timerExpiresAt")}`
  )
}

function recall <C extends keyof cookies> (key: C): cookies[C] {
  /**
   * Retrives a value.
   *
   * @param key: The key to look up.
   */
  return <cookies[C]>({
    cookies: () => Cookies.get(key),
    localStorage: () => localStorage.getItem(key)
  })[preferredStorageMethod]()
}

function forget (key: keyof cookies): void {
  /**
   * Removes a remembered value.
   *
   * @param key: The key to destroy.
   */
  console.log(`Forgot ${key} (was ${recall(key)})`);
  ({
    cookies: () => Cookies.remove(key),
    localStorage: () => localStorage.removeItem(key)
  })[preferredStorageMethod]()
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

function hoverdiv (event: MouseEvent, noteRef: number): void {
  const notes = document.getElementById("footnotes")!
  const note = <HTMLElement>notes.getElementsByClassName("footnote")[noteRef]
  note.style.left = "0"
  note.style.top = `${event.pageY + 10}px`
  if (event.type === "mouseover") {
    note.style.display = "block"
  } else {
    note.style.display = "none"
  }
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
    button.textContent = anomalyName
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
    const anomalySection = document.getElementById("anomaly")!

    // Construct the anomaly
    const anomalyElement = document.createElement('div')
    anomalyElement.innerHTML = (
      langs[lang].rot13 ? rot13 : (patch: string) => patch
    )(applyPatch(
      reference.join("\n"), anomalies[anomaly]
    )).replace(/--(?!\S*\/)/g, "—")

    // Handle table
    anomalyElement.querySelectorAll("table").forEach(table => {
      table.classList.add("wiki-content-table")
    })

    // Handle image
    const image = <HTMLImageElement>anomalyElement.querySelector(
      "img[data-src][data-caption]"
    )
    if (image != null) {
      const src = <string>image.dataset.src
      const caption = <string>image.dataset.caption
      const imageBlock = document.createElement("div")
      imageBlock.classList.add("scp-image-block", "block-right")
      imageBlock.innerHTML = `
        <img src="${src}">
        <div class="scp-image-caption">
          <p>${caption}</p>
        </div>
      `
      image.replaceWith(imageBlock)
    }

    // Handle footnotes
    const notesBlock = anomalyElement.querySelector("footer")!
    const notes = notesBlock.querySelectorAll("ol li")
    // Create a hovertip in the notes block if there is not already one
    if (document.getElementById("footnotes") == null) {
      const footnotes = document.createElement("div")
      footnotes.id = "footnotes"
      notes.forEach((note, index) => {
        const footnote = document.createElement("div")
        footnote.classList.add("footnote")
        // The footer may have the template for the footnote title
        const heading = (
          notesBlock.dataset.template
            ? notesBlock.dataset.template.replace("{N}", `${index + 1}`)
            : `Footnote ${index + 1}.`
        )
        footnote.innerHTML = `
          <div class="f-heading">${heading}</div>
          <div class="f-content">${note.innerHTML}</div>
        `
        footnotes.appendChild(footnote)
      })
      document.body.appendChild(footnotes)
    }
    // Bind the hovertips to the superscripts
    anomalyElement.querySelectorAll("note").forEach(note => {
      const noteRef = parseInt(note.textContent!)
      const noteElement = document.createElement("sup")
      noteElement.classList.add("footnoteref")
      noteElement.innerHTML = `<a>${noteRef}</a>`
      noteElement.addEventListener(
        "mouseover", (e: MouseEvent) => hoverdiv(e, noteRef - 1)
      )
      noteElement.addEventListener(
        "mouseout", (e: MouseEvent) => hoverdiv(e, noteRef - 1)
      )
      note.replaceWith(noteElement)
    })

    // Check if any collapsibles were open in the old section; if they were,
    // open them in the new section
    Array.from(
      anomalyElement.getElementsByTagName("details")
    ).forEach((collapsible, index) => {
      if (openCollapsibles[index]) {
        collapsible.open = true
      } else {
        openCollapsibles[index] = false
      }
      // Record whether the collapsible is open
      collapsible.addEventListener("toggle", () => {
        openCollapsibles[index] = collapsible.open
      })
    })

    // Remove any existing children of the anomaly section
    while (anomalySection.lastChild) {
      anomalySection.removeChild(anomalySection.lastChild)
    }

    anomalySection.appendChild(anomalyElement)

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
  if (toSection === "anomaly" && anomaly !== "base") {
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
