import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </>
  );
};

export default Header;
