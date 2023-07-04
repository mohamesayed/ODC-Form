import React from "react";
import "../style/Submit.css";
import Header from "./Header";
import { ReactComponent as Lock } from "../assets/lock.svg";

function Submit({ header }) {
  return (
    <div className="submit" style={{ width: "650px" }}>
      <div class="overlay">
        <div className="lock">
          <Lock className="lock-icon" />
        </div>
      </div>
      <Header header="Applaying For" />
      <p>Click Here to Start your Technical Exam</p>
      <button>Submit</button>
    </div>
  );
}

export default Submit;
