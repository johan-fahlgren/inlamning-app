import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  <nav
    style={{
      borderBottom: "solid 1px",
      paddingBottom: "1rem",
    }}
  >
    <Link to="/">&#8962;</Link> | <Link to="/todos">Todos</Link> |
    <Link to="/newsletter">Newsletter</Link>
  </nav>;
};

export default Navbar;