import React, { useState } from "react";
import "./../ContactUs/ContactUs.scss";
import "./Login.scss";
import MTfront from "./../../Img/MoveTherapyFront.png";
import { Redirect } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { login, logout } from "../../Redux/Actions/login";

function Login() {
  // useSelector para traer datos del store
  // var loginData = useSelector((state) => state.login);
  var [user, setUser] = useState(null);
  var [password, setPassword] = useState(null);
  var [type, setType] = useState(null);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    // e.preventDefault();
    // Se hace la busqueda en la bd
    // fetch()
    // Fin
    if (user === "juan" && password === "david") {
      setType("admin");
    }
    if (user === "david" && password === "posso") {
      setType("patient");
    }
    dispatch(login({ user, type }));
    console.log(user, password, type);
  };

  if (type === null) {
    return (
      <div className="o-contactus-tab-container">
        <div className="o-login-container">
          <form
            autoComplete="off"
            onSubmit={(e) => handleLogin(e)}
            className="o-login-info-container"
          >
            <h1>Ingresar</h1>
            <p>Corre Electrónico</p>
            <input
              className="o-input"
              onChange={(e) => setUser(e.target.value)}
              name="user"
              placeholder="Escribe tu correo electrónico"
            />
            <p>Contraseña</p>
            <input
              className="o-input"
              onChange={(e) => setPassword(e.target.value)}
              name="pass"
              type="password"
              placeholder="Escribe tu contraseña"
            />
            <div className="o-button-container">
              {/* <Link to="/User"> */}
              <input
                type="submit"
                className="o-button"
                // onClick={(e) => handleLogin(e)}
                placeholder="Ingresar"
              />
              {/* </Link> */}
              {/* Preguntar si se pueden crear las cuentas los mismos usuarios */}
              {/* <Link to="/Main/CreateAccount"> */}
              <button
                className="o-create-account-button"
                onClick={(e) => dispatch(logout())}
              >
                Crear Cuenta
              </button>
              {/* </Link> */}
            </div>
          </form>
          <img className="o-login-image" src={MTfront} alt=""></img>
        </div>
      </div>
    );
  } else {
    if (type === "admin") {
      return <Redirect to="/Admin" />;
    }
    if (type === "patient") {
      return <Redirect to="/Patient" />;
    }
  }
}

export default Login;
