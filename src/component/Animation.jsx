import React from "react";
import OrangeLogo from "../imgs/ODC LOGO-01 2.png";
import "../style/Animation.css";

function Animation() {
  return (
    <div className="animation">
      <div
        className="load"
        style={{
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          border: "3px solid #ff7900",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Welcome To </h1>
        <img src={OrangeLogo} alt="Orange Logo" />
      </div>
    </div>
  );
}

export default Animation;
