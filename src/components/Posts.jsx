import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { SinglePost, SinglePostPage } from ".";

const Posts = ({ allPosts, setUsername }) => {
  return (
    <>
      <div className="card-container">
        {allPosts.length
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
