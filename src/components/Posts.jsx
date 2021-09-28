import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { SinglePost, SinglePostPage } from ".";
import { Link } from "react-router-dom";

const Posts = ({ allPosts, setAllPosts }) => {
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

  useEffect(async () => {
    fetchAllPosts();
  }, []);

  return (
    <>
      <div className="card-container">
        {allPosts.length
          ? allPosts.map((post) => {
              return (
                <div key={post._id}>
                  <Link
                    to={`/single-post/${post._id}`}
                    onClick={() => {
                      <SinglePostPage />;
                    }}
                  >
                    <SinglePost post={post} />
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Posts;
