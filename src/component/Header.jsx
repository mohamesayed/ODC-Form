import React from "react";
import { ReactComponent as Info } from "../assets/info.svg";
import "../style/Header.css";

function Header({ header }) {
  return (
    <>
      <div className="header">
        <span>{<Info />}</span>
        <h1>{header}</h1>
      </div>
    </>
  );
}

export default Header;
