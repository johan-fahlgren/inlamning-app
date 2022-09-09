import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "solid 1px",
        color: "white",
      }}
    >
      <Link to="/">&#8962;</Link>
      <div className="line" />
      <Link to="/todos">Todos</Link>
      <div className="line" />
      <Link to="/newsletter">Newsletter</Link>
    </nav>
  );
};

export default Navbar;
