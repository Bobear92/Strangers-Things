import React from "react";
import { Fragment } from "react";
import { SinglePost } from ".";
import { useParams } from "react-router-dom";

const OtherUserPost = ({ allPosts, setUsername }) => {
  const { username } = useParams();
  const post = allPosts.filter((post) => post.author.username === username);

  return (
    <Fragment id="Other-User-Post">
      <div className="card-container">
        {post.length
          ? post.map((post) => {
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
