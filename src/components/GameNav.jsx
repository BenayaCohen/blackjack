import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function GameNav() {
  const { activeUser } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container style={{backgroundColor: "rgb(82, 136, 57)"}}>
          <Navbar.Brand to="/" as={NavLink}></Navbar.Brand>
            <Nav className="me-auto">
              {activeUser && (
                <>
                  <Nav.Link to="/gameHeader" as={NavLink}>
                    Notes
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav className="ms-auto">
              {!activeUser && <Nav.Link to="/" as={NavLink}></Nav.Link>}
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default GameNav;
