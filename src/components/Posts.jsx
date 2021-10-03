import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { SinglePost } from ".";

const Posts = ({ allPosts, setUsername, filteredPosts }) => {
  return (
    <>
      <div className="card-container">
        {filteredPosts.length
          ? filteredPosts.map((post) => {
              return (
                <Link
                  to={`/posts/${post._id}`}
                  key={post._id}
                  className="link-tag"
                >
                  <SinglePost post={post} />
                </Link>
              );
            })
          : allPosts.length
          ? allPosts.map((post) => {
              return (
                <div key={post._id}>
                  <SinglePost post={post} setUsername={setUsername} />
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Posts;
