import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { getToken } from "./auth";
import { getCurrentUser, getPostUser } from "./api";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
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
  OtherUserPost,
  Newcomp,
  SearchBar,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [currentUser, SetCurrentUser] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [ID, setID] = useState("");

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

  useEffect(async () => {
    const data = await getCurrentUser();
    SetCurrentUser(data.data);
  }, []);

  useEffect(() => {
    const myFilteredPosts = allPosts.filter((e) => {
      if (e.title.includes(searchTerm)) {
        return true;
      }

      if (e.description.includes(searchTerm)) {
        return true;
      }

      return false;
    });

    setFilteredPosts(myFilteredPosts);
  }, [searchTerm]);

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

          <Route exact path="/posts">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Posts
              allPosts={allPosts}
              filteredPosts={filteredPosts}
              setID={setID}
              setUsername={setUsername}
            />
          </Route>
          <Route exact path="/single-post/:id">
            <SinglePostPage allPosts={allPosts} setUsername={setUsername} />
          </Route>
          <Route exact path="/create-new">
            <NewPost setAllPosts={setAllPosts} allPosts={allPosts} />
          </Route>

          <Route exact path="/my-posts">
            <UserPost allPosts={allPosts} setUsername={setUsername} />
          </Route>

          <Route exact path="/other-users-post/:userId">
            <OtherUserPost allPosts={allPosts} setUsername={setUsername} />
          </Route>

          <Route exact path="/message">
            <Message ID={ID} />
          </Route>
        </Switch>{" "}
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
