const gulp = require("gulp")
const del = require("del")

const { makeFtml } = require("./src/build")
const { langs } = require("./src/config")

module.exports = gulp.series('clean', 'build')

gulp.task('clean', async done => {
  // Scrub any previous builds from dist
  await del(".dist/")
  done()
})

gulp.task('build', async done => {
  // For each configured language, build the article
  for (const lang in langs) {
    await makeFtml(lang)
  }
  done()
})
