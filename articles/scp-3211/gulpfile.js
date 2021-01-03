const gulp = require("gulp")
const del = require("del")
const ts = require("gulp-typescript")
const webpack = require("webpack-stream")

gulp.task('clean', async done => {
  // Scrub any previous builds from dist
  await del("./dist/")
  done()
})

gulp.task('make', () => {
  /**
   * Construct the scripts needed for the rest of the build process
   */
  const tsProject = ts.createProject("./tsconfig.json")
  return gulp
    .src(["./src/**/*.ts", "!./src/iframe.ts"])
    .pipe(tsProject())
    .js.pipe(gulp.dest("./dist/"))
})

gulp.task('webpack', () => {
  return gulp
    .src("./src/iframe.ts")
    .pipe(webpack({
      mode: "development",
      module: {
        rules: [
          { test: /\.ts$/, use: "babel-loader" }
        ]
      },
      resolve: { extensions: [".ts", ".js"] }
    }))
    .pipe(gulp.dest("./dist/"))
})

gulp.task('ftml', async done => {
  /**
   * For each configured language, build the article
   */
  const { makeFtml } = require("./dist/build.js")
  const { langs } = require("./dist/config.js")
  for (const lang in langs) {
    await makeFtml(lang)
  }
  done()
})

gulp.task('default',
  gulp.series('clean', gulp.parallel('make', 'webpack'), 'ftml')
)
