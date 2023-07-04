import { Form } from "react-bootstrap";
import "../../style/TermsContions.css";
import SelectBox from "./SelectBox";
import React from "react";
import { useState } from "react";
import PopupMenu from "../../component/PopupMenu";

function TermsConditions({
  className,
  label,
  value,
  type,
  children,
  ...options
}) {
  const [showMenu, setShowMenu] = useState(false);

  const handleInputClick = () => {
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  return (
    <div className="admission">
      <Form.Group className={className} controlId="formGroupTerms" as={"div"}>
        {label && <Form.Label>{label}</Form.Label>}
        {showMenu && <PopupMenu onClose={handleMenuClose} />}
        <Form.Control
          onClick={handleInputClick}
          value={value}
          type={type}
          {...options}
        ></Form.Control>
        <Form.Check type="checkbox" label="I agree to Terms & Conditions " />
        {children}
      </Form.Group>
      <label className="col-12" style={{ marginTop: "15px" }}>
        {" "}
        Specification
        <SelectBox className={"form-select "} />
      </label>
    </div>
  );
}

export default TermsConditions;
