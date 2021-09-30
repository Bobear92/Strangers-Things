import React from "react";
import { Link } from "react-router-dom";
import { SinglePostPage } from ".";

const SinglePost = ({ post, setUsername }) => {
  return (
    <div className="card">
      <Link
        to={`/single-post/${post._id}`}
        onClick={() => {
          <SinglePostPage />;
        }}
      >
        <p className="card-title">{post.title}</p>
      </Link>

      <p>{post.description}</p>
      <p>{post.price}</p>
      <p>{post.location}</p>
      <p>{post.willdeliver}</p>

      <Link
        to={"/my-posts"}
        onClick={() => {
          setUsername(post.author.username);
        }}
      >
        <p>{post.author.username}</p>
      </Link>
    </div>
  );
};

export default SinglePost;
