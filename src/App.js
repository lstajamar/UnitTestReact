import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TestBasico from "./components/TestBasico/TestBasico";
import TestSnapshot from "./components/TestSnapshot/TestSnapshot";
import TestMock from "./components/TestMock/TestMock";
import ClienteWeb from "./components/TestMock/ClienteWeb";

function App() {
  const clienteWeb = new ClienteWeb();

  return (
    <div className="App">
      <header className="App-header">
        {/* <hr />
        <TestBasico />
        <hr /> */}
        {/* <TestSnapshot /> */}
        {/* <hr /> */}
        <TestMock clienteWeb={clienteWeb} />
      </header>
    </div>
  );
}

export default App;
