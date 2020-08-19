const { getQueriesFrom } = require("@testing-library/nightwatch");

module.exports = {
  "Demo test ecosia.org": async function (browser) {
    browser.url("https://www.ecosia.org/");

    const { getAllByText } = getQueriesFrom(browser);

    const input = await getAllByText("Sign in to keep track of your impact!");

    console.log("=> ", input);
    browser.assert.titleContains("Ecosia").end();
  },
};
