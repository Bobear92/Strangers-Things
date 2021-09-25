import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getToken, getUser } from "../auth";

const Header = ({ loggedIn, setLoggedIn }) => {
  const user = getUser();

  return (
    <div className="NavBar">
      <p className="HeadTitle">Stranger's Things</p>

      {loggedIn ? (
        <div className="loggedOut">
          <div className="loggedUser">{`${user}`}</div>
          <NavLink
            className="HeadLink"
            to="/login"
            onClick={() => {
              localStorage.clear();
              setLoggedIn(false);
            }}
          >
            Log Out
          </NavLink>
        </div>
      ) : (
        <NavLink className="HeadLink" to="/login">
          Login
        </NavLink>
      )}

      <NavLink className="HeadLink" to="/register">
        Register
      </NavLink>
      <NavLink className="HeadLink" to="/posts">
        Posts
      </NavLink>
    </div>
  );
};

export default Header;
