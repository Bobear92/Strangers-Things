import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { loginUser } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-component-main-container">
      <form
        id="login"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const result = await loginUser(username, password);

            // need to create a store token function

            setUsername("");
            setPassword("");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>
        </fieldset>

        <fieldset className="auth-component-input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </fieldset>

        <button>Login</button>
      </form>
    </div>
  );
};

export default Register;
