const { getQueriesFrom } = require("@testing-library/nightwatch");

module.exports = {
  "Demo test ecosia.org": async function (browser) {
    browser.url("https://www.google.com/");

    const { getAllByAltText } = getQueriesFrom(browser);

    const { selector } = await getAllByAltText("Google");

    console.log("--------selector---", selector);
  },
};
