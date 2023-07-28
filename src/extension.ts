import * as vscode from "vscode";
import { HellowWorldPannel } from "./HelloWorldPannel";

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

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "zest-beta" is now active!');

  context.subscriptions.push(vscode.commands.registerCommand(
    "zest-beta.helloWorld",
    () => {
      HellowWorldPannel.createOrShow(context.extensionUri);
    }
  ));

  context.subscriptions.push(vscode.commands.registerCommand(
    "zest-beta.askQuestion",
    async () => {
      const answer = await vscode.window.showInformationMessage("How was your day?", "good", "bad");

      if(answer === 'bad'){
        vscode.window.showInformationMessage("Sorry to hear that");
      }
      else if(answer === 'good'){
        vscode.window.showInformationMessage("Glad to hear that");
      }
      else {
        console.log({ answer });
      }
    }
  ));

}
// This method is called when your extension is deactivated
export function deactivate() {}
