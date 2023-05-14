import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import API from "../axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/userSlice";
import { toast } from "react-toastify";
import { emailRegex } from "../helper/regex";

export default function SigninScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
  });

  const handleFormEdit = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signupInfo.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (!emailRegex.test(signupInfo.email)) {
      toast.error("Email must be valid");
      return;
    }

    try {
      const response = await API.post("/auth/login", {
        email: signupInfo.email,
        password: signupInfo.password,
      });

      if (response.status === 200) {
        const { token, email, name, password } = response.data;
        dispatch(setUser({ name, email, password, token }));
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error(response.statusText);
      }
    } catch (e) {
      toast.error(e.response.data);
    }
  };

  return (
    <Container className="small-container">
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            required
            onChange={handleFormEdit}
            value={signupInfo.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            required
            onChange={handleFormEdit}
            values={signupInfo.password}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New Customer? <Link to={`/signup`}>Create your Account</Link>
        </div>
      </Form>
    </Container>
  );
}
