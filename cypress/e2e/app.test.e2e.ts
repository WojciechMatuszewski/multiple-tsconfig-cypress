import { someFunctionFromLib } from "../../src/lib/something";

it("works", () => {
  someFunctionFromLib();
  cy.visit("/");
});
