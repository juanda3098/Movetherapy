import useScript from './useScript';
import React from "react";

const InstaEmbed= props => {
  useScript("https://apps.elfsight.com/p/platform.js");
  return(
    <div>
        <div className="elfsight-app-d88966d5-7094-46fa-b5d9-9dc33021cc81"></div>
        {useScript("https://apps.elfsight.com/p/platform.js")}
    </div>
    
  );
}

export default InstaEmbed;