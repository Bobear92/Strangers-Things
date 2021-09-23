import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Loading, Login, Posts, Register } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
      <div id="App">
        <Route path="/register">
          <Register setIsLoading={setIsLoading} />
        </Route>
        <Route path="/login">
          <Login setIsLoading={setIsLoading} />
        </Route>
        <Route path="/post">
          <Posts />
        </Route>

        {isLoading ? <Loading /> : null}
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
