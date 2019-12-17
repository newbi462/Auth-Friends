import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { Route, Link, Switch } from "react-router-dom";

import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>



        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
