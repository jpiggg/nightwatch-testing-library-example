const { getQueriesFrom } = require("@testing-library/nightwatch");

module.exports = {
  "Demo test ecosia.org": async function (browser) {
    browser.url("https://www.google.ru/");

    const { getAllByText } = getQueriesFrom(browser);

    const { selector } = await getAllByText("Google");

    console.log("--------selector---", selector);
  },
};
