import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { getToken } from "./auth";

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
  UserPost,
  Message,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [username, setUsername] = useState("");

  async function fetchAllPosts() {
    try {
      const { data } = await axios.get(
        "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT/posts"
      );

      setAllPosts(data.data.posts);
    } catch (error) {
      console.error(error);
    }
  }

  function isUserLoggedIn() {
    const token = getToken();

    if (token) {
      setLoggedIn(true);
    }
  }

  useEffect(async () => {
    fetchAllPosts();
    isUserLoggedIn();
  }, []);

  return (
    <Router>
      <div id="App">
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route path="/login">
            <Login
              setIsLoading={setIsLoading}
              setLoggedIn={setLoggedIn}
              username={username}
              setUsername={setUsername}
            />
          </Route>

          <Route path="/register">
            <Register setIsLoading={setIsLoading} setLoggedIn={setLoggedIn} />
          </Route>

          <Route path="/posts">
            <Posts allPosts={allPosts} setUsername={setUsername} />
          </Route>
          <Route path="/single-post/:id">
            <SinglePostPage allPosts={allPosts} setUsername={setUsername} />
          </Route>
          <Route path="/create-new">
            <NewPost setAllPosts={setAllPosts} allPosts={allPosts} />
          </Route>
          <Route path="/my-posts">
            <UserPost
              allPosts={allPosts}
              username={username}
              setUsername={setUsername}
            />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
        </Switch>{" "}
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
