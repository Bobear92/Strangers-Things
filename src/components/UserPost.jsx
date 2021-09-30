import React from "react";
import { Fragment } from "react";
import { SinglePost, SinglePostPage } from ".";
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
                    <Link
                      to={`/single-post/${post._id}`}
                      onClick={() => {
                        <SinglePostPage />;
                      }}
                    >
                      <SinglePost post={post} setUsername={setUsername} />
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
      </Fragment>
    );
  } else {
    return (
      // need to change!

      <Fragment id="UserPost">
        <div className="card-container">
          {post.length
            ? post.map((post) => {
                return (
                  <div key={post._id}>
                    <Link
                      to={`/single-post/${post._id}`}
                      onClick={() => {
                        <SinglePostPage />;
                      }}
                    >
                      <SinglePost post={post} setUsername={setUsername} />
                    </Link>
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
