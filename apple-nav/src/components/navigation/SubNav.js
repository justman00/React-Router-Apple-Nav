import React, { useState, useEffect } from "react";
import data from "../data";
import styled from "styled-components";

const SubNavHeader = styled.header`
  width: 100%;
  background: gray;
  display: flex;
  justify-content: center;
`;

const Cards = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  //   justify-content: space-between;
  align-items: baseline;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0 50px;

  img {
    width: 60px;
    height: 60px;
  }

  h3 {
    margin-top: 15px;
    color: white;
    font-family: sans-serif;
  }
`;

const SubNav = props => {
  const [components, setComponents] = useState([]);
  useEffect(() => {
    const newComps = data[props.match.params.product];
    setComponents(newComps);
  });

  return (
    <SubNavHeader>
      <Cards>
        {components.map(comp => (
          <Card>
            <h3>{comp.name}</h3>
            <img src={comp.icon} alt="icon" />
          </Card>
        ))}
      </Cards>
    </SubNavHeader>
  );
};

export default SubNav;
