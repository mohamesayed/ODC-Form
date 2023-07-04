import { Form } from "react-bootstrap";
import "../../style/Gender.css";

function Gender() {
  return (
    <>
      <label style={{ marginTop: "8px" }}>
        Gender
        <Form.Group className={"gender"}>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3 ">
              <Form.Check
                inline
                label="male"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="female"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>
      </label>
    </>
  );
}

export default Gender;
