import React from "react";
import { Fragment } from "react";
import { SinglePost } from ".";
import { getUser } from "../auth";

const UserPost = ({ allPosts, setUsername }) => {
  const currentUser = getUser();

  const post = allPosts.filter((post) => post.author.username === currentUser);

  return (
    <Fragment>
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
export default UserPost;
