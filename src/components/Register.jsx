import { Form, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

const Register = ({ handleSignUpClose, modalSignUp, handleSignUpShow }) => {
  const { onRegister } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [nickname, setNickname] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  async function handleLogin() {
    setIsLoggingIn(true);
    try {
      await onRegister(email, password);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoggingIn(false);
    }
  }

  return (
    <>
      <Button
        variant="success"
        className="SignUp-btn"
        onClick={handleSignUpShow}
      >
        SignUp
      </Button>
      <Modal show={modalSignUp} onHide={handleSignUpClose}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
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
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Label>First  Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First and Last Name"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First and Last Name"
                autoFocus
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nickname"
              autoFocus
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={handleLogin}
            disabled={isLoggingIn}
          >
            SignUp
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Register;
