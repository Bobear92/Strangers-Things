import React from "react";
import { Link, useParams } from "react-router-dom";
import { SinglePostPage } from ".";
import { getUser } from "../auth";
import { deletePost, message } from "../api";

const SinglePost = ({ post, setUsername }) => {
  const currentUser = getUser();
  const { id } = useParams();
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
        <Link to={"/message"}>
          <button>Send Message</button>
        </Link>
      ) : null}
    </div>
  );
};

export default SinglePost;
