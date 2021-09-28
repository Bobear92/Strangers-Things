import React from "react";
import { useParams } from "react-router-dom";
import { SinglePost } from ".";

const SinglePostPage = ({ allPosts }) => {
  const { id } = useParams();
  const singlePost = allPosts.find((post) => {
    if (post._id === id) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
      <SinglePost post={singlePost} />
    </>
  );
};

export default SinglePostPage;
