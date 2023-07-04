import React from "react";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { ReactComponent as Document } from "../assets/document.svg";
import { ReactComponent as ID } from "../assets/person.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Email } from "../assets/Mail.svg";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import { ReactComponent as Lock } from "../assets/lock.svg";
import { ReactComponent as Add } from "../assets/add.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Date } from "../assets/date.svg";
import { ReactComponent as Graduation } from "../assets/graduate.svg";
import { ReactComponent as Field } from "../assets/field.svg";
import { ReactComponent as Person } from "../assets/person.svg";

import InputWithIcon from "./Inputs/InputWithIcon";
import TermsConditions from "./Inputs/TermsConditions";
import Gender from "./Inputs/Gender";
import "../style/Call.css";
import Submit from "./Submit";
import Header from "./Header";
import SelectBox from "./Inputs/SelectBox";
import { useState } from "react";
import PopupMenu from "../component/PopupMenu";
import FilterPopup from "./FilterPopup";

function Call() {
  const [showMenu, setShowMenu] = useState(false);

  const handleInputClick = () => {
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };
  return (
    <>
      <div className="all">
        {/* start admission */}
        <div className="admission " style={{ width: "650px" }}>
          <Header header="Admission Form" />
          <TermsConditions className={"consent"} placeholder={"Consent Form"}>
            {" "}
            <Arrow className="arrow" />
          </TermsConditions>
        </div>
        {/* end admission */}

        {/* start personal */}
        <div className="personal" style={{ width: "650px" }}>
          {/* <div class="overlay">
            <div className="lock">
              <Lock className="lock-icon" />
            </div>
          </div> */}
          <Header header="Personal Info" />
          <div className="both">
            <div className="first col-5">
              <InputWithIcon
                className={"icon"}
                placeholder={"Type here"}
                label={"First Name"}
              >
                {" "}
                <Document className="document" />{" "}
              </InputWithIcon>
            </div>
            <div className="last col-5">
              <InputWithIcon
                className={"icon"}
                placeholder={"Type here"}
                label={"Last Name"}
              >
                {" "}
                <Document className="document" />{" "}
              </InputWithIcon>
            </div>
          </div>

          <div className="both">
            <div className="first col-5">
              <InputWithIcon
                className={"icon"}
                placeholder={"Type here"}
                label={"National ID "}
              >
                {" "}
                <ID className="document" />{" "}
              </InputWithIcon>
            </div>
            <div className="last col-5">
              <Gender />
            </div>
          </div>

          <div className="both">
            <div className="first col-5">
              <SelectBox className={"select"} label="Country">
                <Location className="document" />
              </SelectBox>
            </div>
            <div className="last col-5">
              <SelectBox className={"select"} label="Governate">
                <Location className="document" />
              </SelectBox>
            </div>
          </div>

          <div className="both">
            <div className="first col-5">
              <InputWithIcon
                className={"icon"}
                placeholder={"Phone Number"}
                label={"Phone Number"}
              >
                {" "}
                <Phone className="document" />{" "}
              </InputWithIcon>
            </div>
            <div className="last col-5">
              <InputWithIcon
                className={"icon"}
                placeholder={"Type here"}
                label={"Email"}
              >
                {" "}
                <Email className="document" />{" "}
              </InputWithIcon>
            </div>
          </div>

          <div className="birth-date" style={{ marginBottom: "15px" }}>
            <div
              style={{ width: "160px", marginRight: "29px" }}
              className="date "
            >
              <div>
                <SelectBox className={"select"} label="Governate">
                  <Date className="document" />
                </SelectBox>
              </div>
            </div>
            <div
              style={{ width: "160px", marginRight: "29px" }}
              className="date"
            >
              <div>
                <SelectBox className={"select"} label="Governate">
                  <Date className="document" />
                </SelectBox>
              </div>
            </div>
            <div
              style={{ width: "160px", marginRight: "29px" }}
              className="date"
            >
              <div>
                <SelectBox className={"select"} label="Governate">
                  <Date className="document" />
                </SelectBox>
              </div>
            </div>
          </div>
        </div>

        {/* end personal */}

        {/* start education */}

        <div className="education" style={{ width: "650px" }}>
          {/* <div class="overlay">
            <div className="lock">
              <Lock className="lock-icon" />
            </div>
          </div> */}
          <Header header="Educatuion Info" />
          <div
            className="filtering"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <div className="col-8">
              <SelectBox className={"select"} label="Governate">
                <Graduation className="document" />
              </SelectBox>
            </div>
            {showMenu && <FilterPopup onClose={handleMenuClose} />}

            <div style={{ marginBottom: "-22px", marginLeft: "65px" }}>
              <Filter onClick={handleInputClick} className="filter" />
            </div>
          </div>

          <div className="birth-date">
            <div
              style={{ width: "200px", marginRight: "29px" }}
              className="date "
            >
              <div>
                <SelectBox className={"select"} label="Governate">
                  <Graduation className="document" />
                </SelectBox>
              </div>
            </div>
            <div
              style={{ width: "200px", marginRight: "29px" }}
              className="date"
            >
              <div>
                <SelectBox className={"select"} label="Governate">
                  <Graduation className="document" />
                </SelectBox>
              </div>
            </div>
            <div
              style={{ width: "200px", marginRight: "29px" }}
              className="date"
            >
              <div>
                <SelectBox className={"select"} label="Governate">
                  <Graduation className="document" />
                </SelectBox>
              </div>
            </div>
          </div>

          <div className="add-yors">
            <p style={{ marginTop: "15px" }}>
              {" "}
              <span>
                <Add />{" "}
              </span>
              or add yours
            </p>
          </div>

          <div className="birth-date" style={{ marginBottom: "15px" }}>
            <div
              style={{ width: "160px", marginRight: "29px" }}
              className="date "
            >
              <div>
                <SelectBox className={"select"} label="Governate">
                  <Person className="document" />
                </SelectBox>
              </div>
            </div>

            <div className="date " style={{ width: "180px" }}>
              <InputWithIcon
                className={"icon"}
                placeholder={"Type here"}
                label={"Linkedin"}
              >
                {" "}
                <Email className="document" />{" "}
              </InputWithIcon>
            </div>
            <div
              className="date "
              style={{ marginLeft: "30px", width: "180px" }}
            >
              <InputWithIcon
                className={"icon"}
                placeholder={"Type here"}
                label={"GitHub/Behance"}
              >
                {" "}
                <Email className="document" />{" "}
              </InputWithIcon>
            </div>
          </div>

          <div className="both">
            <div
              style={{ width: "280px", marginRight: "29px" }}
              className="first "
            >
              <div>
                <SelectBox className={"select"} label="Governate">
                  <Date className="document" />
                </SelectBox>
              </div>
            </div>
            <div
              style={{ width: "280px", marginRight: "29px" }}
              className="last "
            >
              <div>
                <SelectBox className={"select"} label="Governate">
                  <Field className="document" />
                </SelectBox>
              </div>
            </div>
          </div>
        </div>
        {/* end education */}

        <Submit header="Applaying For" />
      </div>
    </>
  );
}

export default Call;
