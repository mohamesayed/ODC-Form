import React from "react";
import { Form } from "react-bootstrap";
import "../../style/Select.css";

function SelectBox({
  className,
  label,
  value,
  type,
  children,
  width,
  ...options
}) {
  return (
    <>
      <label className="w-100  select-lable">
        {" "}
        {label}
        <Form.Select
          style={{ paddingLeft: "30px" }}
          aria-label="Default select example "
          as={"div"}
          className={className}
        >
          <option style={{ paddingLeft: "80px" }}> Open </option>
          <option style={{ paddingLeft: "30px" }} value="1">
            One
          </option>
          <option style={{ paddingLeft: "30px" }} value="2">
            Two
          </option>
          <option style={{ paddingLeft: "30px" }} value="3">
            Three
          </option>
        </Form.Select>
        {children}
      </label>
    </>
  );
}

export default SelectBox;
