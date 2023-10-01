/**
 * This will fail type checking but VSCode
 * is not smart enough to mark this as "invalid".
 *
 * The support for having multiple tsconfig files in vscode is non-existent.
 */

cy.mount("");

function App() {
  return <div>app</div>;
}

export default App;
