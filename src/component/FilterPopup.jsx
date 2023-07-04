import React from "react";
import { useState } from "react";
import { ReactComponent as Email } from "../assets/search.svg";

import "../style/FilterPopup.css";
import ReactDOM from "react-dom";
import InputWithIcon from "./Inputs/InputWithIcon";
import SelectBox from "./Inputs/SelectBox";
function FilterPopup({ onClose }) {
  const [selectedOption, setSelectedOption] = useState("");
  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selected, setSelected] = useState(1);
  const buttons = document.getElementsByTagName("button");
  console.log(buttons);

  return ReactDOM.createPortal(
    <div className="overlay-background">
      <div className="filter-popup">
        <label>
          {" "}
          <h6>Filter by</h6>
          <div className="check">
            <label>
              <input
                type="checkbox"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleCheckboxChange}
              />
              Option 1
            </label>
            <label>
              <input
                type="checkbox"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleCheckboxChange}
              />
              Option 2
            </label>
            <label>
              <input
                type="checkbox"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleCheckboxChange}
              />
              Option 3
            </label>
          </div>
        </label>
        <div className="study-filed" style={{ marginTop: "24px" }}>
          <InputWithIcon
            className={"icon"}
            placeholder={"Key word"}
            label={"Filter by field of study"}
          >
            {" "}
            <Email style={{ width: "15" }} className="document" />{" "}
          </InputWithIcon>

          <div
            className="options"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <p>
              {" "}
              <button className={selected ? "active" : ""}>
                option One
              </button>{" "}
            </p>
            <p>
              {" "}
              <button>option One</button>{" "}
            </p>
            <p>
              {" "}
              <button>option One</button>{" "}
            </p>
            <p>
              {" "}
              <button>option One</button>{" "}
            </p>
            <p>
              {" "}
              <button>option One</button>{" "}
            </p>
            <p>
              {" "}
              <button>option One</button>{" "}
            </p>
          </div>
        </div>

        <div className="select-option">
          <SelectBox className={"select"} label="Country" />
        </div>
        <div className="line"></div>
        <div className="buttons">
          <button className="transparent">Clear all</button>
          <button className="applay" onClick={onClose}>
            Apply
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("filter")
  );
}

export default FilterPopup;
