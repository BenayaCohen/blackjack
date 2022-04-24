import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <h1 style={{color:"black"}}>BlackJacke</h1>
      <p style={{color:"black", fontSize:"1.5rem" }}> 
        Blackjack is a classic casino card game, also referred to as “21.” The
        object of the game is simple – get your hand total to score as close to
        21 as possible, without exceeding 21. There’s no greater feeling for a
        player than getting a natural blackjack!
      </p>
    </Container>
  );
};

export default Header;
