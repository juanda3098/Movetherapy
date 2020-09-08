import React, { useState } from "react";

import Logo from "../../Img/Admin/Logo2.png";

import "./Welcome.scss";

function Welcome() {
//   const [admin, setaAdmin] = useState("Diana Mesa");
  const [admin] = useState("Diana Mesa");
  return (
    <div className="o-body-welcome">
      <img src={Logo} alt="" className="o-img-welcome" />
      <h1 className="o-title-welcome">Bienvenido al panel</h1>
      <h1 className="o-title-welcome">administrativo</h1>
      <p>{admin}</p>
    </div>
  );
}

export default Welcome;
