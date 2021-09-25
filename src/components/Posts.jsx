import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

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
                <div className="card" key={post._id}>
                  <p className="card-title">{post.title}</p>
                  <p>{post.description}</p>
                  <p>{post.price}</p>
                  <p>{post.location}</p>
                  <p>{post.willdeliver}</p>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Posts;
