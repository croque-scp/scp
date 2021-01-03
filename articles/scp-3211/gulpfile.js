const gulp = require("gulp")
const del = require("del")
const ts = require("gulp-typescript")

gulp.task('clean', async done => {
  // Scrub any previous builds from dist
  await del(".dist/")
  done()
})

gulp.task('make', () => {
  const tsProject = ts.createProject("./tsconfig.json")
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("./dist/"))
})

gulp.task('build', async done => {
  // For each configured language, build the article
  const { makeFtml } = require("./dist/build")
  const { langs } = require("./dist/config")
  for (const lang in langs) {
    await makeFtml(lang)
  }
  done()
})

gulp.task('default', gulp.series('clean', 'make', 'build'))
