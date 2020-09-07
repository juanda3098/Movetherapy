import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./ComponentsH/Main/Main";
import UserPage from "./ComponentsU/UserMain/UserMain"

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/User" exact component={UserPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
