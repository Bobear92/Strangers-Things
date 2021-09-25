import React, { useState } from "react";
import { createPost } from "../api";
import { getToken } from "../auth";

const NewPost = ({ allPosts, setAllPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  return (
    <div className="newPost-container">
      <form
        id="newPost"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const token = getToken();

            const createdPost = await createPost(
              title,
              description,
              price,
              location,
              willDeliver,
              token
            );

            console.log(createdPost, "just post");
            console.log([createdPost, ...allPosts], "all of them");

            setAllPosts([createdPost, ...allPosts]);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <fieldset className="new-post-component-input">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="new-post-component-input">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="new-post-component-input">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="new-post-component-input">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="new-post-component-input">
          <label htmlFor="willDeliver">Will Deliver</label>
          <input
            id="willDeliver"
            type="text"
            placeholder="Will you deliver?"
            value={willDeliver}
            onChange={(event) => {
              setWillDeliver(event.target.value);
            }}
          ></input>
        </fieldset>

        <button className="new-post-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
