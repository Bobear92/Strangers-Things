import React from "react";
import { Fragment } from "react";
import { SinglePost } from ".";
import { getUser } from "../auth";
import { Link } from "react-router-dom";

const UserPost = ({ allPosts, username, setUsername }) => {
  const currentUser = getUser();

  if (username === currentUser) {
    const post = allPosts.filter(
      (post) => post.author.username === currentUser
    );

    return (
      <Fragment id="UserPost">
        <div className="card-container">
          {post.length
            ? post.map((post) => {
                return (
                  <div key={post._id}>
                    <SinglePost post={post} setUsername={setUsername} />
                  </div>
                );
              })
            : null}
        </div>
      </Fragment>
    );
  } else {
    const post = allPosts.filter((post) => post.author.username === username);

    return (
      <Fragment id="UserPost">
        <div className="card-container">
          {post.length
            ? post.map((post) => {
                return (
                  <div key={post._id}>
                    <SinglePost post={post} setUsername={setUsername} />
                  </div>
                );
              })
            : null}
        </div>
      </Fragment>
    );
  }
};

export default UserPost;
