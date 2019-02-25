import React from "react";
import NavWrapper from "./navigation/NavWrapper";
import SubNav from "./navigation/SubNav";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavWrapper />
      <Route path="/:product" component={SubNav} />
    </div>
  );
};

export default App;
