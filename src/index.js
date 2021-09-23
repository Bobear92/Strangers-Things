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
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
      <div id="App">
        <Header />
        {/* <Register setIsLoading={setIsLoading}/>
        <Login setIsLoading={setIsLoading}/> */}
        <Posts />
        {isLoading ? <Loading /> : null}
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
