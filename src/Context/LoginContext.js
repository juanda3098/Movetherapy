import React, { createContext, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import creds from "../variables";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState("");

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
        if (res.data === "empty") {
          swal({
            title: "Lo sentimos",
            text: "Los datos ingresados son incorrectos",
            icon: "error",
          });
        } else {
          if (res.data.tipo === "admin") {
            setUser(res.data);
            history.push("/admin");
            swal.close();
          }
          if (res.data.tipo === "user") {
            setUser(res.data);
            history.push("/user");
            swal.close();
          }
        }
      });
  };

  const logout = (history) => {
    setUser("");
    history.push("/");
  };

  const data = { user, login, logout };

  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export { LoginProvider };

export default LoginContext;
