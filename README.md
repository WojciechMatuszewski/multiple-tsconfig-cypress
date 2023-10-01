# Multiple tsconfig files and Cypress

This repo demonstrates how one could setup cypress component/e2e testing inside a React + TS application.

The main issue with default setups is that they allow you to import `cy.X` globals into the application code. This is a very bad practice that might lead to many mistakes. One should not be able to do this. Ideally we could only use the `cy.X` globals in the test code related to Cypress.

To validate the types, one has to run the `tsc` for each project (each `tsconfig.json` file). The root `tsconfig.json` only contains references and does not include any files. Ideally, we could only use the `tsconfig.json` for type-checking and typescript would be smart enough to use all the `tsconfig.json` files referenced in the `references` configuration, but that is not the case.
