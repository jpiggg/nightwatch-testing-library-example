const path = require("path");

module.exports = {
  // check for more recent versions of selenium here:
  // https://selenium-release.storage.googleapis.com/index.html
  version: "3.12.0",
  baseURL: "https://selenium-release.storage.googleapis.com",
  basePath: `${path.resolve(__dirname, "../")}/.selenium`,
  drivers: {
    chrome: {
      // check for more recent versions of chrome driver here:
      // https://chromedriver.storage.googleapis.com/index.html
      version: "2.40",
      arch: process.arch,
      baseURL: "https://chromedriver.storage.googleapis.com",
    },
    ie: {
      // check for more recent versions of internet explorer driver here:
      // https://selenium-release.storage.googleapis.com/index.html
      version: "3.9.0",
      arch: process.arch,
      baseURL: "https://selenium-release.storage.googleapis.com",
    },
    firefox: {
      version: "0.23.0",
      arch: process.arch,
      baseURL: "https://github.com/mozilla/geckodriver/releases/download",
    },
  },
};
