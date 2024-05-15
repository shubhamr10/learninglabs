import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// StictMode is a tool for highlighting potential problems in an application.
// Like Fragment, StrictMode does not render any visible UI.
// It activates additional checks and warnings for its descendants.
// StrictMode renders components twice, first time to check for side-effects
// and second time to render the actual UI.
// This helps in identifying potential issues in the application.

// Before React v18
// ReactDOM.render(<App />);
