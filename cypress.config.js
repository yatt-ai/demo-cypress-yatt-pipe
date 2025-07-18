const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.js",
    reporter: "junit",
    reporterOptions: {
      mochaFile: "results/cypress-results.xml",
      testCaseSwitchClassnameAndName: false,
    },
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // This replaces the old plugins/index.js
      return config;
    },
  },
});
