const gulp = require("gulp")
const del = require("del")
const ts = require("gulp-typescript")
const cleanCss = require("gulp-clean-css")
const webpack = require("webpack-stream")
const TerserPlugin = require("terser-webpack-plugin")
const { BannerPlugin } = require("webpack")
const { compress } = require("compress-tag")

const { version } = require("./package.json")

gulp.task('clean', async done => {
  // Scrub any previous builds from dist
  await del("./build/")
  await del("./dist/")
  done()
})

/**
 * Construct the scripts needed for the rest of the build process
 */
gulp.task('ts', () => {
  const tsProject = ts.createProject("./tsconfig.json")
  return gulp
    .src(["./src/**/*.ts", "!./src/iframe.ts"])
    .pipe(tsProject())
    .js.pipe(gulp.dest("./build/"))
})

/**
 * Minify CSS.
 */
gulp.task('css', () => {
  return gulp
    .src("./src/**/*.css")
    .pipe(cleanCss())
    .pipe(gulp.dest("./build/"))
})

/**
 * Bundle all the requirements for the JS that will run in the iframe into a
 * single file.
 */
gulp.task('webpack', () => {
  const bannerText = compress`
    3211.js version ${version}, generated ${new Date()}
    \nThis file was generated for SCP-3211 and its translations in the
    international SCP community.
    \nSCP-3211-EN: https://scp-wiki.wikidot.com/scp-3211
    \nSource: https://github.com/rossjrw/scp/tree/main/source/scp-3211
  `

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
      },
      plugins: [
        new BannerPlugin(bannerText)
      ]
    }).on("error", error => console.log("Webpack:", error)))
    .pipe(gulp.dest("./dist/"))
})

/**
 * For each configured language, build the article.
 */
gulp.task('ftml', async done => {
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
