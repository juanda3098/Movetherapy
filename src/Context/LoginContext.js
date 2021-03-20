import React, { createContext, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import creds from "../variables";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [type, setType] = useState();
  const [user, setUser] = useState('');

  const login = (userInput, passwordInput, history) => {
    swal({
      title: "Iniciando...",
      text: "Estamos verificando tus datos",
      icon: "info",
      buttons: false,
    });
    axios
      .post(`${creds.url}/login`, {
        user: userInput,
        password: passwordInput,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          if (
            userInput === res.data[0].usuarioAdmin &&
            passwordInput === res.data[0].contrasenaAdmin
          ) {
            console.log(res.data[0]);
            setUser(res.data[0]);
            setType("admin");
            history.push("/admin");
            swal.close();
          } else {
            if (
              userInput === res.data[0].usuarioAdmin &&
              passwordInput === res.data[0].contrasenaAdmin
            ) {
              console.log(res.data[0]);
              setUser(res.data[0]);
              setType("user");
              history.push("/user");
              swal.close();
            }
          }
        } else {
          swal({
            title: "Lo sentimos",
            text: "Los datos ingresados son incorrectos",
            icon: "error"
          });
        }
      });
  };

  const logout = (history) => {
    setUser('')
    setType('')
    history.push('/')
  };

  const data = { user, type, login, logout };

  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export { LoginProvider };

export default LoginContext;
