import { Container, Button } from "react-bootstrap";
import { useNavigationType } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const GameHeader = ({score}) => {
  const { onLogout } = useAuth();
  

  const navigate = useNavigationType;
  function hedelLogOut() {
    navigate("/game");
  }

  const start = () => {
    window.location.pathname = "/game";
  };
  return (
    <Container style={{ margin: "4%", textAlign: "center" }}>
      <h1>welcom to the Blackjack</h1>
      <p>hello player1</p>
      <Button style={{ margin: "4%" }} variant="success" onClick={start}>
        start game
      </Button>
      <Button variant="success" onClick={hedelLogOut}>
        log out
      </Button>
      <h3>Score</h3>
      <p>highest score: {score}</p>
      <p>last score: {score}</p>
    </Container>
  );
};

export default GameHeader;
