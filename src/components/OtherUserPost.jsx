import React from "react";
import { Fragment } from "react";
import { SinglePost } from ".";

const OtherUserPost = ({ allPosts, setUsername, username }) => {
  console.log("hello");
  const filteredPost = allPosts.filter(
    (post) => post.author.username === username
  );
  console.log(username, "Here i am!", filteredPost);

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
