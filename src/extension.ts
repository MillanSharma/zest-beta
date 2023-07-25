// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

function showWebview() {
  // Create and show a new Webview
  const panel = vscode.window.createWebviewPanel(
    "myExtension", // Unique identifier
    "My Extension", // Title displayed in the header of the Webview
    vscode.ViewColumn.One, // Show the Webview in the editor's first column
    {}
  );

  // Load content into the Webview
  panel.webview.html = "<h1>Hello from My Extension!</h1>";
}
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "zest-beta" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "zest-beta.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from zest-beta!");
    }
  );

  context.subscriptions.push(disposable);

  //   function activate(context: vscode.ExtensionContext) {
  // Register a command named 'showWebview' and associate it with the showWebview function
  disposable = vscode.commands.registerCommand(
    "zest-beta.showSnippets",
    showWebview
  );

  // Add the command to the extension's context so it can be disposed when the extension is deactivated
  context.subscriptions.push(disposable);
  //   }
}

// This method is called when your extension is deactivated
export function deactivate() {}
