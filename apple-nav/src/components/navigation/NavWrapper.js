import React, { useState, useEffect } from "react";
import data from "../data";
import Nav from "./Nav";
import styled from "styled-components";
import "./Nav.scss";

const NavigationDiv = styled.div`
  width: 100%;
  height: 50px;
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;

  &:first-child {
    padding-left: 25px;
  }

  .fa-shopping-cart {
    margin-right: 50px;
  }
`;

const NavWrapper = () => {
  const categories = [
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "TV",
    "Music",
    "Support"
  ];

  return (
    <NavigationDiv>
      <i class="fab fa-apple" />
      {categories.map(category => (
        <Nav key={category} category={category} />
      ))}
      <i class="fas fa-search" />
      <i class="fas fa-shopping-cart" />
    </NavigationDiv>
  );
};

export default NavWrapper;
