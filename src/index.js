import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header } from "./components";

// const { allPost, setAllPosts } = useState([]);

async function fetchAllPosts() {
  const { data } = axios.get(
    "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT/posts"
  );
  console.log(data);
}

const App = () => {
  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <Router>
      <div id="App">
        <Header />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
