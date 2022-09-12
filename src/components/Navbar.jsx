import React from "react";
import { NavLink } from "react-router-dom";
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
      <NavLink
        to="/home"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          textDecoration: isActive ? "none" : "",
        })}
      >
        &#8962;
      </NavLink>
      <div className="line" />
      <NavLink
        to="/todos"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          textDecoration: isActive ? "none" : "",
        })}
      >
        Todos
      </NavLink>
      <div className="line" />
      <NavLink
        to="/newsletter"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          textDecoration: isActive ? "none" : "",
        })}
      >
        Newsletter
      </NavLink>
    </nav>
  );
};

export default Navbar;
