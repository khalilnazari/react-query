import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "lightgray",
        display: "flex",
        gap: "15px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/super-heros">Super Heroes</Link>
      <Link to="/parallel-query">Parallel Query</Link>
      <Link to="/dynamic-parallel-query">Dynamic Parallel Query</Link>
    </div>
  );
};

export default Navbar;
