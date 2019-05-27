import React from "react";
import ReactDOM from "react-dom";
import a from './package_src';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>{a("TEST")}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
