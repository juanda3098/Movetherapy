import React from "react";

import Img1 from "../../Img/Img1.png";
import Img2 from "../../Img/Img2.png";

import "./Home.css";

function Home() {
  return (
    <div className="o-container-home">
      <div className="o-title">
        <h1 className="o-sentence">Reabilitación</h1>
        <h1 className="o-sentence">física con</h1>
        <h1 className="o-sentence">amor</h1>
      </div>
      <div className="o-container-img">
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
      </div>
      
    </div>
  );
}

export default Home;
