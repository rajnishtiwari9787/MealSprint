# How to Run This App

Follow these steps to set up and run the application:

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- npm (Node Package Manager, comes with Node.js)

## Steps

1. **Initialize the Project**
   ```bash
   npm init
   ```
   This command creates a `package.json` file to manage your project's dependencies and scripts. Follow the prompts to configure the project or press Enter to accept the defaults.

2. **Install Parcel as a Development Dependency**
   ```bash
   npm install -D parcel
   ```
   This command installs Parcel as a development dependency for bundling your application.

3. **Install React and ReactDOM**
   ```bash
   npm install react react-dom
   ```
   These libraries are required for building the application.

4. **Run the App Using Parcel**
   ```bash
   npx parcel index.html
   ```
   This command starts the development server and serves your application. Parcel automatically bundles your files and reloads the browser when changes are detected.

## Additional Notes

- Make sure your `index.html` file is present in the root of your project and includes a `<div>` with an `id` to render your React app.
  
  Example `index.html`:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React App</title>
  </head>
  <body>
      <div id="root"></div>
      <script src="index.js"></script>
  </body>
  </html>
  ```

- Your `index.js` file should serve as the entry point for your React app:
  ```javascript
  import React from "react";
  import ReactDOM from "react-dom/client";

  const App = () => <h1>Hello, React!</h1>;

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  ```

Now you're ready to build and run your app!

