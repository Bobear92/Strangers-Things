import React from "react";
import { Link, useHistory } from "react-router-dom";
import { SinglePostPage } from ".";
import { getUser } from "../auth";
import { deletePost } from "../api";

const SinglePost = ({ post, setUsername }) => {
  const currentUser = getUser();

  return (
    <div className="card">
      <Link
        exact
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
      <p>{post.author.username}</p>

      {/* <Link
        to={`/other-users-post/${post.author.username}`}
        onClick={() => {
          setUsername(post.author.username);
        }}
      >
        <p>{post.author.username}</p>
      </Link> */}

      {post.author.username === currentUser ? (
        <button
          className="deletePost"
          onClick={async (event) => {
            event.preventDefault();

            try {
              await deletePost(post._id);
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Delete
        </button>
      ) : currentUser && post.author.username !== currentUser ? (
        <Link to={"/message"} onClick={() => {}}>
          <button>Send Message</button>
        </Link>
      ) : null}
    </div>
  );
};

export default SinglePost;
