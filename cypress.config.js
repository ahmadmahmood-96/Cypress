const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  projectId: "84a4gw",
  e2e: {
    baseUrl: 'https://shopblissfulbeauty.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  experimentalStudio: true,
});