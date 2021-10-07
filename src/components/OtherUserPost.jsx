import React from "react";
import { Fragment } from "react";
import { SinglePost } from ".";
import { useParams } from "react-router";

const OtherUserPost = ({ allPosts, setUsername }) => {
  const { userId } = useParams();

  const filteredPost = allPosts.filter((post) => post.author._id === userId);

  return (
    <Fragment id="Other-User-Post">
      <h1>Hello</h1>

      <div className="card-container">
        {filteredPost.length
          ? filteredPost.map((post) => {
              return (
                <div key={post._id}>
                  <SinglePost post={post} setUsername={setUsername} />
                </div>
              );
            })
          : null}
      </div>
    </Fragment>
  );
};

export default OtherUserPost;
