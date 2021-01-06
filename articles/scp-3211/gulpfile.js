const gulp = require("gulp")
const del = require("del")
const ts = require("gulp-typescript")
const cleanCss = require("gulp-clean-css")
const webpack = require("webpack-stream")
const TerserPlugin = require("terser-webpack-plugin")

gulp.task('clean', async done => {
  // Scrub any previous builds from dist
  await del("./build/")
  await del("./dist/")
  done()
})

gulp.task('ts', () => {
  /**
   * Construct the scripts needed for the rest of the build process
   */
  const tsProject = ts.createProject("./tsconfig.json")
  return gulp
    .src(["./src/**/*.ts", "!./src/iframe.ts"])
    .pipe(tsProject())
    .js.pipe(gulp.dest("./build/"))
})

gulp.task('css', () => {
  /**
   * Minify CSS.
   */
  return gulp
    .src("./src/**/*.css")
    .pipe(cleanCss())
    .pipe(gulp.dest("./build/"))
})

gulp.task('webpack', () => {
  /**
   * Bundle all the requirements for the JS that will run in the iframe into a
   * single file.
   */
  return gulp
    .src("./src/iframe.ts")
    .pipe(webpack({
      mode: process.env.NODE_ENV,
      ...(
        process.env.NODE_ENV === "development"
          ? { devtool: "eval-source-map" }
          : {}
      ),
      output: { filename: "3211.js" },
      module: {
        rules: [
          { test: /\.ts$/, use: "babel-loader" }
        ]
      },
      resolve: { extensions: [".ts", ".js"] },
      externals: { "js-cookie": "Cookies" },
      optimization: {
        minimize: process.env.NODE_ENV === "production",
        minimizer: [ new TerserPlugin({ extractComments: false }) ],
        usedExports: true
      }
    }).on("error", error => console.log("Webpack:", error)))
    .pipe(gulp.dest("./dist/"))
})

gulp.task('ftml', async done => {
  /**
   * For each configured language, build the article
   */
  const { makeFtml, copyFiles } = require("./build/build.js")
  const { langs } = require("./build/config.js")
  for (const lang in langs) {
    await makeFtml(lang, process.env.NODE_ENV === "development")
    await copyFiles(lang)
  }
  await del("./dist/3211.js")
  done()
})

gulp.task('default',
  gulp.series('clean', gulp.parallel('ts', 'css', 'webpack'), 'ftml')
)
