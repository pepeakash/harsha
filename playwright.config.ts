import { defineConfig, devices } from "@playwright/test";
import {config} from "dotenv";

if (process.env.ENVIRONMENT) { // if environment is passed from command line
  console.log("ENVIRONMENT: ", process.env.ENVIRONMENT); // print the environment
  config({ // load the environment file based on the environment
    path: `./helper/env/.env.${process.env.ENVIRONMENT}`, 
    override: true, // override the existing environment variables
  });
} else { // if no environment is passed from command line
  config({ // load the default environment file
    path: `./helper/env/.env.staging`, 
    override: true, // override the existing environment variables
  });
}
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv'; // import dotenv package to read environment variables from package.json file 
// import path from 'path'; // import path package to resolve the path of the environment file
// dotenv.config({ path: path.resolve(__dirname, '.env') }); // read the environment variables from the .env file

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({ // export the configuration object to be used in the tests 
  testDir: "./tests", // directory where the tests are present
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI
    ? [ // if the tests are running in CI
        [ // use the below reporters
          "junit", // junit reporter
          { // configuration for the junit reporter
            outputFile: "results.xml", // output file for the junit report
          }, 
        ], 
      ]
    : [ // if the tests are running locally
        ["list"], // use the list reporter
        [
          "json",  // json reporter
          { // configuration for the json reporter
            outputFile: "jsonReports/jsonReport.json", // output file for the json report
          },
        ], 
        [ // use the html reporter
          "html", 
          { // configuration for the html reporter
            open: "always", // open the html report always
          },
        ],
        // ['experimental-allure-playwright']
      ],
  globalTeardown: "./tests/globalsetup.ts",   // global setup file path because we are using global setup in the tests
  timeout: 50000, // timeout for the tests to run during execution
  expect: { 
    timeout: 3000, // timeout for the expect conditions to be satisfied
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: { // shared settings for all the projects
    headless: process.env.CI ? true : false, // run the tests in headless mode if the tests are running in CI else run in headful mode
    /* Base URL to use in actions like await page.goto('/'). */
    // baseURL: 'http://127.0.0.1:3000', 
    // baseURL: "https://dev107189.service-now.com/api/now/table/incident",
    // baseURL: "https://letcode.in",
    extraHTTPHeaders: { // extra http headers to be used in the tests to authenticate the requests 
      Authorization: "Basic YWRtaW46U0NxN2pDb2tDbFI4", // basic authentication header to authenticate the requests 
    }, 

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // viewport: { width: 720, height: 720 },
    viewport: null, // viewport browser window size  
    trace: process.env.CI ? "off" : "on", // trame logs the browser actions in the tests 
    video: process.env.CI ? "off" : "retain-on-failure", // video records the browser actions in the tests
    screenshot: process.env.CI ? "off" : "only-on-failure", // screenshot captures the screenshots of the browser during the tests

    ignoreHttpsErrors: true, // ignore the https errors in the tests 
    permissions: ["geolocation"], // permissions to be granted to the browser during the tests 
    testIdAttribute: 'data-test-id', // test id attribute to be used in the tests

    launchOptions: {  // launch options for the browser
      args: ["--start-maximized"], // launch options to start the browser in maximized mode

      // logger: { // logger configuration for the browser
      //   isEnabled: (name, severity) => true, // enable the logger for the browser
      //   log: (name, severity, message, args) => console.log(name, severity) // log the messages in the console
      // } 
    },
  }, 
  globalSetup: "src/utils/globalSetup.ts", // global setup means the setup that needs to be done before running the tests
  /* Configure projects for major browsers */
  projects: [ // projects to be run in the tests
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
