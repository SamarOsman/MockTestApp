const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 5000,

  env: {
    url: 'https://demoauthor.magnolia-cms.com/travel/'
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     /* config.specPattern =[
        'cypress/Integration/examples/TC0*.js'
      ]
      return config*/


    },
    specPattern: 'cypress/Integration/examples/*.js',
    
    testIsolation: false
  },
});
