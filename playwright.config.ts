import { defineConfig, devices } from "@playwright/test";
import {config} from "dotenv";

if (process.env.ENVIRONMENT) {
  console.log("ENVIRONMENT: ", process.env.ENVIRONMENT);
  config({
    path: `./helper/env/.env.${process.env.ENVIRONMENT}`,
    override: true,
  });
} else {
  config({
    path: `./helper/env/.env.staging`,
    override: true,
  });
}
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
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
    ? [
        [
          "junit",
          {
            outputFile: "results.xml",
          },
        ],
      ]
    : [
        ["list"],
        [
          "json",
          {
            outputFile: "jsonReports/jsonReport.json",
          },
        ],
        [
          "html",
          {
            open: "always",
          },
        ],
        // ['experimental-allure-playwright']
      ],
  globalTeardown: "./tests/globalsetup.ts",
  timeout: 50000,
  expect: {
    timeout: 3000,
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: process.env.CI ? true : false,
    /* Base URL to use in actions like await page.goto('/'). */
    // baseURL: 'http://127.0.0.1:3000',
    // baseURL: "https://dev107189.service-now.com/api/now/table/incident",
    // baseURL: "https://letcode.in",
    extraHTTPHeaders: {
      Authorization: "Basic YWRtaW46U0NxN2pDb2tDbFI4",
    },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // viewport: { width: 720, height: 720 },
    viewport: null,
    trace: process.env.CI ? "off" : "on",
    video: process.env.CI ? "off" : "retain-on-failure",
    screenshot: process.env.CI ? "off" : "only-on-failure",

    ignoreHttpsErrors: true,
    permissions: ["geolocation"],
    testIdAttribute: 'data-test-id',

    launchOptions: {
      args: ["--start-maximized"],

      // logger: {
      //   isEnabled: (name, severity) => true,
      //   log: (name, severity, message, args) => console.log(name, severity)
      // }
    },
  },
  globalSetup: "src/utils/globalSetup.ts",
  /* Configure projects for major browsers */
  projects: [
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
