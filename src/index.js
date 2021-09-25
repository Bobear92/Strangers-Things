import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Loading, Login, Register, Posts } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
      <div id="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>{" "}
        */
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
