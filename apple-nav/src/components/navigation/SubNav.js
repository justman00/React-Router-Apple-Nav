import React, { useState, useEffect } from "react";
import data from "../data";

const SubNav = props => {
  const [components, setComponents] = useState([]);
  useEffect(() => {
    const newComps = data[props.match.params.product];
    setComponents(newComps);
  });

  return (
    <div>
      {components.map(comp => (
        <h1>{comp.name}</h1>
      ))}
    </div>
  );
};

export default SubNav;
