import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import FirstContext from "../contex/FirstContext";

const GameHeader = () => {
  const { logOut } = useContext(FirstContext);
  const start = () => {
    window.location.pathname = "/game";
  };
  return (
    <Container style={{ margin: "4%", textAlign: "center" }}>
      <h1>welcom to the Blackjack</h1>
      <p>hello player1</p>
      <Button style={{margin: "4%"}} variant="success" onClick={start}>start game</Button>
      <Button variant="success" onClick={logOut}>log out</Button>
      <h3>Score</h3>
    </Container>
  );
};

export default GameHeader;
