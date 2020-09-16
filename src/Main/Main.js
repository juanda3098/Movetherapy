
import React, {Component} from 'react'

import Page from "../ComponentsH/Page/Page";
import Admin from '../ComponentsA/Admin/Admin';
import UserPage from "../ComponentsU/UserMain/UserMain";

import "./Main.css";
import Home from '../ComponentsH/Home/Home';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      renderPage: "home"
    };
    this.changeToAdmin = this.changeToAdmin.bind(this);
    this.changeToUser = this.changeToUser.bind(this);
    this.changeToHome = this.changeToHome.bind(this);
  }

  changeToAdmin = () => {
    this.setState({renderPage:"admin"});
  }

  changeToUser = () => {
    this.setState({renderPage:"user"});
  }

  changeToHome = () => {
    this.setState({renderPage:"home"});
  }

  render() {
    if(this.state.renderPage=="home"){
      return(
        <div>
          <Page changeAdmin={this.changeToAdmin} changeUser={this.changeToUser}/>
        </div>
      )
    }
    else if(this.state.renderPage=="admin"){
      return(
        <div>
          <Admin changeHome={this.changeToHome}/>
        </div>
      )
    }
    else if(this.state.renderPage=="user"){
      return(
        <div>
          <UserPage changeHome={this.changeToHome}/>
        </div>
      )
    }
  }
};

export default Main;
