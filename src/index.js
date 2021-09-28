import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Header,
  Loading,
  Login,
  Register,
  Posts,
  NewPost,
  SinglePostPage,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  return (
    <Router>
      <div id="App">
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route path="/login">
            <Login setIsLoading={setIsLoading} setLoggedIn={setLoggedIn} />
          </Route>

          <Route path="/register">
            <Register setIsLoading={setIsLoading} setLoggedIn={setLoggedIn} />
          </Route>

          <Route path="/posts">
            <Posts setAllPosts={setAllPosts} allPosts={allPosts} />
            
          </Route>
          <Route path="/single-post/:id">
            <SinglePostPage allPosts={allPosts} />
          </Route>
          <Route path="/create-new">
          <NewPost setAllPosts={setAllPosts} allPosts={allPosts}/>

          </Route>
        </Switch>{" "}
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
