import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Register } from "./components";
import { Posts } from "./components";

const App = () => {
  return (
    <Router>
      <div id="App">
        <Header />
        <Posts />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
