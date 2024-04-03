import { Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom/dist";

const Home = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
};

export default Home;
