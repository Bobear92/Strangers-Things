import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
   
    
    <div className="NavBar">
    <p className="HeadTitle">Stranger's Things</p>
      <NavLink className="HeadLink" to="/login">Login</NavLink>
      <NavLink className="HeadLink" to="/register">Register</NavLink>
      <NavLink className="HeadLink" to="/posts">Posts</NavLink>
    </div>
    
  );
};

export default Header;
