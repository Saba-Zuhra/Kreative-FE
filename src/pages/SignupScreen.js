import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import API from "../axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/userSlice";
import { emailRegex } from "../helper/regex";
import { toast } from "react-toastify";

export default function SignupScreen() {
  // const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signupInfo.password !== signupInfo.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    if (signupInfo.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (signupInfo.name.length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }

    if (!emailRegex.test(signupInfo.email)) {
      alert("Email must be valid");
      return;
    }

    try {
      const response = await API.post("/auth/register", {
        name: signupInfo.name,
        email: signupInfo.email,
        password: signupInfo.password,
      });

      if (response.status === 200) {
        const { token, email, name, password } = response.data;
        dispatch(setUser({ name, email, password, token }));
        toast.success("Signup successful");
        navigate("/");
      } else if (response.status === 401) {
        toast.warning("Email already exists");
        navigate("/signin");
      }
    } catch (e) {
      toast.error(e.response.data);
    }
  };

  const handleFormEdit = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  return (
    <Container className="small-container">
      <h1 className="my-3">Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            onChange={handleFormEdit}
            value={signupInfo.name}
          />
        </Form.Group>

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
            value={signupInfo.password}
          />

          <Form.Group className="mb-3" controlId="confirmpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirmpassword"
              type="password"
              required
              onChange={handleFormEdit}
              value={signupInfo.confirmpassword}
            />
          </Form.Group>
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign Up</Button>
        </div>
        <div className="mb-3">
          Already have an Account? <Link to={`/signin`}>Sign-In</Link>
        </div>
      </Form>
    </Container>
  );
}
