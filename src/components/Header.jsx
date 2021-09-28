import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getToken, getUser } from "../auth";

const Header = ({ loggedIn, setLoggedIn }) => {
  const user = getUser();

  return (
    <div className="NavBar">
      <p className="HeadTitle">Stranger's Things</p>
      <NavLink className="Head-Post" to="/posts">
        Posts
      </NavLink>

      {loggedIn ? (
        <>
          <div className="loggedUser">{`${user}`}</div>
          <NavLink
            className="Head-Logged-in"
            to="/login"
            onClick={() => {
              localStorage.clear();
              setLoggedIn(false);
            }}
          >
            Log Out
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className="Head-Login" to="/login">
            Login
          </NavLink>
          <NavLink className="Head-Reg" to="/register">
            Register
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
