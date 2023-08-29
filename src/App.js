import React from "react";
import "./index.scss";
import RightPanel from "./rightPanel";

import { Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";

const App = () => {
  return (
    <div className="App">
    <div className="flex flex-row w-full">
      <RightPanel />
             <Home/>
  
      </div>

   </div> 
  );
};

export default App;
