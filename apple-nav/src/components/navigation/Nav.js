import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ category }) => {
  return (
    <Link
      style={{ color: "white", textDecoration: "none" }}
      to={`/${category}`}
    >
      {category}
    </Link>
  );
};

export default Nav;
