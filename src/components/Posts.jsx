import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

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
      <h1>
        {allPosts.length
          ? allPosts.map((post) => {
              console.log(post);
              return (
                <div key={post._id}>
                  <h4>{post.title}</h4>
                  <h5>{post.description}</h5>
                  <h6>{post.price}</h6>
                </div>
              );
            })
          : null}
      </h1>
    </>
  );
};

export default Posts;
