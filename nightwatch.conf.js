const tunnelSettings = {
  tunnel: true,
  tunnelIdentifier: "lambdatest.infra.tutu.ru",
};

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["tests"],

  selenium: {
    start_process: false,
    host: "hub.lambdatest.com",
    log_path: "./reports/visual-regression",
    port: 80,
    username: "lambdatesttutu",
    access_key: "i0eRw1B4MJwKDNIRowTQBdYCgZR0nWVUX4AW3WgTRK9odzvcJp",
  },

  test_settings: {
    default: {
      request_timeout_options: {
        timeout: 1000000,
      },
      screenshots: {
        enabled: true,
        path: "reports/visual-regression",
      },
      log_screenshot_data: true,
      globals: {
        waitForConditionTimeout: 5000,
      },
    },
    chrome: {
      screenshots: {
        enabled: true,
        path: "reports/visual-regression",
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          // https://peter.sh/experiments/chromium-command-line-switches/
          args: [
            "--window-size=1360,10000",
            "--headless",
            "--enable-font-antialiasing",
            "--disable-gpu",
            "disable-infobars",
            "--disable-extensions",
            "--force-device-scale-factor=1",
          ],
        },
        ...tunnelSettings,
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
        version: "75.0",
        selenium_version: "3.13.0",
        "firefox.driver": "v0.26.0",
        enableCustomTranslation: true,
        "moz:firefoxOptions": {
          args: [
            // "--headless",
            "--width=1360",
            "--height=10000",
            "-force-device-scale-factor=1",
          ],
        },
        ...tunnelSettings,
      },
    },
    ie: {
      desiredCapabilities: {
        platform: "Windows 10",
        browserName: "Internet Explorer",
        version: "11.0",
        enableCustomTranslation: true,
        selenium_version: "2.37.1",
        "ie.driver": "v0.26.0",
        console: true,
        network: true,
        ignoreZoomSetting: true,
        ignoreProtectedModeSettings: true,
        initialBrowserUrl: false,
        ensureCleanSession: true,
        unexpectedAlertBehaviour: "accept",
        nativeEvents: false,
        disablePopupBlocking: true,
        enablePersistentHover: true,
        javascriptEnabled: true,
      },
      compatibility: 11001,
      popups: true,
      flash: true,
      driver: "3.4.0",
    },
    edge: {
      browserName: "MicrosoftEdge",
      platform: "Windows 10",
      version: "18.0",
    },
  },
};
