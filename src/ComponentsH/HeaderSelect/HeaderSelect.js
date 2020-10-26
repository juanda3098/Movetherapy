import React, { Component } from "react";
import "./HeaderSelect.scss";
import { Link } from "react-router-dom";
import Hmenu from "../../Img/Hmenu";

class HeaderSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySelect: "none",
    };
  }
  toggleSelect = () => {
    if (this.state.displaySelect === "block") {
      this.setState({
        displaySelect: "none",
      });
    } else {
      this.setState({
        displaySelect: "block",
      });
    }
  };

  render() {
    return (
      <div className="o-header-select-container">
        <button className="o-select-button" onClick={this.toggleSelect}>
          <Hmenu></Hmenu>
        </button>
        <div
          className="o-dropmenu-content"
          style={{ display: this.state.displaySelect }}
        >
          <Link to="/Main/Services">
            <button className="o-dropmenu-button" onClick={this.toggleSelect}>
              Servicios
            </button>
          </Link>
          <Link to="/Main/AboutUs">
            <button className="o-dropmenu-button" onClick={this.toggleSelect}>
              Quiénes somos
            </button>
          </Link>
          <Link to="/Main/ContactUs">
            <button className="o-dropmenu-button" onClick={this.toggleSelect}>
              Contáctenos
            </button>
          </Link>
          <Link to="/Main/Login">
            <button className="o-dropmenu-button" onClick={this.toggleSelect}>
              Ingresar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderSelect;
