import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite"
    },
    specPattern: "**/*.test.component.tsx"
  },

  e2e: {
    setupNodeEvents() {},
    specPattern: "cypress/e2e/**/*.test.e2e.ts",
    baseUrl: "http://localhost:5173"
  }
});
