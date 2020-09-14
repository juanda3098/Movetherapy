import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from "react-redux";
import allReducers from '../Redux/Reducers'

import Page from "../ComponentsH/Page/Page";
import Admin from "../ComponentsA/Admin/Admin";
import UserPage from "../ComponentsU/UserMain/UserMain";

import "./Main.css";

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const Main = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Page} />
          <Route path="/Admin" component={Admin} />
          <Route path="/Patient" exact component={UserPage} />
          {/* <Route path="/User" exact component={User} /> */}
          {/* <Route path="/Profile" component={() => <Profile user={this.state.user} />} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Main;
