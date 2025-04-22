import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/authSlice";

import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import "../style/Login.css";

const users = [
  { username: "1", password: "1" },
  { username: "q", password: "2" },
  { username: "xyz", password: "abc" },
];

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    const un = users.find((user) => user.username === username);
    if (un) {
      if (un.password === password) {
        dispatch(addUser({ username: username }));
        navigate("/dashboard");
      } else {
        setError("Wrong Password!");
      }
    } else {
      setError("User Not Found!");
    }
  }

  return (
    <Container fluid className="login-page">
      <Row className="login-container">
        {/* Left Half - Heading */}
        <Col md={6} className="login-left">
          <h2 className="login-heading">Login</h2>
          <p className="login-description">
            Welcome! Please enter your credentials to log in.
          </p>
        </Col>

        {/* Right Half - Form */}
        <Col md={6} className="login-right">
          <div className="login-card">
            {error && (
              <Alert variant="danger" className="text-center">
                <i className="bi bi-info-circle"></i> {error}
              </Alert>
            )}
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="username" className="login-label">
                  Username
                </Form.Label>
                <Form.Control
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="login-input"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label htmlFor="password" className="form-label">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="login-input"
                />
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                className="w-100 login-btn"
              >
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
