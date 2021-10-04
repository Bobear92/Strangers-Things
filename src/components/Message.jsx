import React, { useState } from "react";
import { sendMessage } from "../api";

const Message = ({}) => {
  const [title, setTitle] = useState("");
  const [userMessage, setUserMessage] = useState("");

  return (
    <div id="message">
      <p className="message-title">Send User a Message</p>
      <form
        id="message"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            sendMessage(id, userMessage);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <fieldset className="message-component-input">
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
        <fieldset className="message-component-input">
          <label htmlFor="title">Message</label>
          <input
            id="message-body"
            type="textarea"
            placeholder="Write out message here."
            value={userMessage}
            onChange={(event) => {
              setUserMessage(event.target.value);
            }}
          ></input>
        </fieldset>
      </form>
    </div>
  );
};

export default Message;
