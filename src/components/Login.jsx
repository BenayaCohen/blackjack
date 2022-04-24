import { Container, Form, Button, Modal, Alert } from "react-bootstrap";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth"

const Login = ({ handleLoginClose, modalLogin, handleLoginShow }) => {
  const { onLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);

  async function handleLogin() {
    setIsLoginError(false);
    setIsLoggingIn(true);
    try {
      await onLogin(email, password);
    } catch (err) {
      console.log(err);
      setIsLoginError(true);
    } finally {
      setIsLoggingIn(false);
    }
  }
  return (
    <Container>
      <Button
        variant="success"
        className="login-btn"
        onClick={handleLoginShow}
        style={{ margin: "2%" }}
      >
        Login
      </Button>
      <Modal show={modalLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
          {isLoginError && (
            <Alert variant="danger">
              Login error! Incorrect username or password
            </Alert>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password"
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleLogin} disabled = {isLoggingIn}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Login;
