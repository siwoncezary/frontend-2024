import { Button, Container, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import Title from "../components/Title";

const confirmPasswordField = "confirmPassword";
const passwordField = "password";
const emailField = "email";
function FormPage() {
  const [errors, setErrors] = useState([]);
  const [isSendig, setSending] = useState(false);

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    console.log("Submiting...")
    const data = new FormData(e.target);
    if (data.get(confirmPasswordField) !== data.get(passwordField)){
        setErrors([...errors, "Password and confirmed password do not match!"])
        return;
    }
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSending(false);
    for(let key of data.keys()){
        e.target[key].value = "";
    }
  };

  return (
    <>
      <Title>Register</Title>
      <div className="text-danger">
        {errors.map((e, i) => <p key={i}>{e}</p>)}
      </div>
      <Form className="text-primary" onSubmit={(e) => onSubmitFunction(e)}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <FormControl
            required
            id={emailField}
            type={emailField}
            name={emailField}
            className="text-lg"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">Input valid email</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={passwordField}>Password</Form.Label>
          <FormControl
            required
            id={passwordField}
            type={passwordField}
            minLength={2}
            name={passwordField}
            placeholder="Enter your password"
          />
          <Form.Text className="text-muted">
            Input mininum 6 characters, one digit and one special character
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="confirmPassword">Confirm password</Form.Label>
          <FormControl
            required
            id={confirmPasswordField}
            type={confirmPasswordField}
            name={confirmPasswordField}
            minLength={2}
            placeholder="Re-enter your password"
          />
          <Form.Text className="text-muted">
            Confirm your password, it should be the same as above!
          </Form.Text>
        </Form.Group>
        <div className="d-grid">
          <Button disabled={isSendig}  type="submit" variant="outline-primary" size="lg">
            Register
          </Button>
        </div>
      </Form>
    </>
  );
}

export default FormPage;
