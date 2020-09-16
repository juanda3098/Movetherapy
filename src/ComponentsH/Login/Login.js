import React, {Component} from 'react';
import "./Login.scss"
import MTfront from "./../../Img/MoveTherapyFront.png"
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    usernameChange =(event)=>{
        this.setState({username: event.target.value});
    }

    passwordChange =(event)=>{
        this.setState({password: event.target.value});
    }

    login = () => {
        if(this.state.username=="Admin"&&this.state.password=="Admin1"){
            this.props.changeAdmin();
        }
        else if(this.state.username=="User"&&this.state.password=="User1"){
            this.props.changeUser();
        }
    }

    render(){
        return (
            <div className="o-contactus-tab-container">
                <div className="o-login-container">
                    <div className="o-login-info-container">
                        <h1>Ingresar</h1>
                        <p>Corre Electrónico</p>
                        <input className="o-input" placeholder="Escribe tu correo electrónico" value={this.state.username} onChange={this.usernameChange}></input>
                        <p>Contraseña</p>
                        <input className="o-input" type="password" placeholder="Escribe tu contraseña" value={this.state.password} onChange={this.passwordChange}></input>
                        <div className="o-button-container">
                            <button className="o-button" onClick={this.login}>Enviar</button>
                            <Link to="/Main/CreateAccount">
                                <button className="o-create-account-button">Crear Cuenta</button>
                            </Link>
                        </div>
                    </div>
                    <img className="o-login-image" src={MTfront} alt=""></img>
                </div>
            </div>
        );
    }
}

export default Login;