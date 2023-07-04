import React from "react";
import { Form } from "react-bootstrap";
import "../../style/InputWithIcon.css";
import "../../style/InputWithIcon.css";

function InputWithIcon({
  className,
  label,
  value,
  type,
  children,
  ...options
}) {
  return (
    <>
      <Form.Group
        className={` ${className} w-100`}
        controlId="formGroupicon"
        as={"div"}
      >
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control value={value} type={type} {...options}></Form.Control>
        {children}
      </Form.Group>
    </>
  );
}

export default InputWithIcon;
