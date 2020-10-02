const { getQueriesFrom } = require("@testing-library/nightwatch");

module.exports = {
  "Demo test ecosia.org": async function (browser) {
    browser.url(
      "https://www.w3schools.com/howto/howto_css_custom_checkbox.asp"
    );

    browser.click(".checkmark", () => {
      browser.pause();
    });
  },
};
