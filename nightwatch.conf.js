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
    host: "127.0.0.1",
    log_path: "./reports/visual-regression",
    port: 4444,
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
        version: "78.0",
        selenium_version: "3.13.0",
        "firefox.driver": "v0.26.0",
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
        platform: "Windows 8.1",
        browserName: "Internet Explorer",
        version: "11.0",
        ...tunnelSettings,
        selenium_version: "3.13.0",
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
  },
};
