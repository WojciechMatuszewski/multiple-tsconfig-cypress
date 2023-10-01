# Multiple tsconfig files and Cypress

It turns out, **the order of items in the `references` array** matters significantly. The original order of the `references` looked like this

```json
"references": [
    { "path": "./tsconfig.node.json" },
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.cypress.component.json" },
    { "path": "./tsconfig.cypress.e2e.json" }
],
```

It seems like the **VSCode will use the last-matching `tsconfig` for a given file**. So, in our case, it was using the `tsconfig.cypress.component.json` for the `App.tsx` file. This tsconfig has to include the `src`, otherwise we would not be able to import components into the component test files.
Now, If I were to update the `references` to look like the following:

```json
"references": [
    { "path": "./tsconfig.node.json" },
    { "path": "./tsconfig.cypress.component.json" },
    { "path": "./tsconfig.cypress.e2e.json" },
    { "path": "./tsconfig.app.json" }
],
```

The `App.tsx` will use the `tsconfig.app.json`, as it is the last tsconfig that includes the `src`.

While this behavior makes the whole setup work as I would intent it to work, I feel like this whole thing works by accident (and made my consider using WebStorm, since I do not know how many similar issues I had in the past that were purely due to VSCode weirdness).

<del>
This repo demonstrates how one could setup cypress component/e2e testing inside a React + TS application.

The main issue with default setups is that they allow you to import `cy.X` globals into the application code. This is a very bad practice that might lead to many mistakes. One should not be able to do this. Ideally we could only use the `cy.X` globals in the test code related to Cypress.

To validate the types, one has to run the `tsc` for each project (each `tsconfig.json` file). The root `tsconfig.json` only contains references and does not include any files. Ideally, we could only use the `tsconfig.json` for type-checking and typescript would be smart enough to use all the `tsconfig.json` files referenced in the `references` configuration, but that is not the case.

</del>

<del>

## Note about the VSCode

I find it really frustrating that VSCode does not support multiple `tsconfig.json` setups. Out of curiosity, I decided to give WebStorm a try in this repo as well. As it turns out, WebStorm will correctly mark the `cy.X` import in the `App.tsx` as invalid (that is not the case in VScode).

[Here is my tweet about it](https://twitter.com/wm_matuszewski/status/1708108987164500008).
</del>
