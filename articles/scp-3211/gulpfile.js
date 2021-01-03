import { series, task } from "gulp"
import del from "del"

import { makeFtml } from "./src/build"
import { langs } from "./src/config"

export default series('clean', 'build')

task('clean', async done => {
  // Scrub any previous builds from dist
  await del(".dist/")
  done()
})

task('build', async done => {
  // For each configured language, build the article
  for (const lang in langs) {
    await makeFtml(lang)
  }
  done()
})
