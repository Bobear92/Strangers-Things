import React from "react";

const SinglePost = ({ post }) => {
  return (
    <div className="card">
      <p className="card-title">{post.title}</p>
      <p>{post.description}</p>
      <p>{post.price}</p>
      <p>{post.location}</p>
      <p>{post.willdeliver}</p>
    </div>
  );
};

export default SinglePost;
