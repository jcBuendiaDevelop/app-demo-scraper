const browserSync = require("browser-sync").create();
const gulp = require("gulp");
const del = require("del");
const template = require("gulp-template");
const rename = require("gulp-rename");
const webpack = require("webpack");
const gutil = require("gulp-util");
const minimist = require('minimist');
const webpackConfigProd = require("./webpack.prod.js");
const webpackConfigDev = require("./webpack.dev.js");
require("dotenv").config();

var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'production' }
};

const options = minimist(process.argv.slice(2), knownOptions);
// const options = minimist(process.argv.slice(2), {});

gulp.task("config", (cb) => {
  gulp
    .src(`env/${options.env}.config`)
    .pipe(template())
    .pipe(rename(".env"))
    .pipe(gulp.dest("."));
  cb();
});

gulp.task("webpack", (cb) => {
  const myConfig = Object.assign(
    {},
    options.env === "production" ? webpackConfigProd : webpackConfigDev
  );

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log(
      "[webpack]",
      stats.toString({
        colors: true,
        progress: true
      })
    );
    cb();
  });
});

gulp.task("clean", (cb) => {
  del(["build"]);
  cb();
});

gulp.task("serve", (cb) => {
  browserSync.init({
    server: {
      baseDir: "./build"
    },
  });
  cb();
});

gulp.task("reload", (cb) => {
  browserSync.reload();
  cb();
});

gulp.task("build", gulp.series("config", "clean", "webpack"));

gulp.task("watch", (cb) => {
  gulp.watch("src/**/*", gulp.series("webpack", "reload"));
  cb();
});

gulp.task("default", gulp.series("build", "serve", "watch"));