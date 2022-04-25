import "./Game.css";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";

const Game = () => {
  const [message, setMessage] = useState("");
  const [firstCard, setFirstCard] = useState("");
  const [secondCard, setSecondCard] = useState("");
  const [newCard, setNewCard] = useState("");
  const [blackjake, setBlackjack] = useState(false);
  const [isAlive, setIsAlive] = useState(false);
  const [sum, setSum] = useState("");
  const [score, setScore] = useState("");

  function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 9) {
      return 9;
    } else if (randomNumber === 1) {
      return 11;
    } else {
      return randomNumber;
    }
  }
  let firstCardOnDeck = getRandomCard();
  let secondCardOnDeck = getRandomCard();

  function startGame() {
    setIsAlive(true);
    setFirstCard(firstCardOnDeck);
    setSecondCard(secondCardOnDeck);
    setSum(firstCardOnDeck + secondCardOnDeck);
    renderGame();
  }

  let hand = sum;

  function renderGame() {
    setMessage("want to play around?");
    if (hand <= 20) {
      setMessage("do you want to draw a new card?");
      setIsAlive(true);
      setScore("5");
    } else if (hand === 21) {
      setMessage("wohoo!! you got a blackjake!");
      setBlackjack(true);
      setScore("10");
      console.log(blackjake);
    } else {
      setMessage("your out of the game!!");
      setIsAlive(false);
    }
  }

  let alive = isAlive;
  let win = blackjake;

  function newCardOnDeck() {
    if (alive === true && win === false) {
      let newHand = getRandomCard();
      setSum(sum + newHand);
      hand = sum + newHand;
      renderGame();
      setNewCard(newHand);
    }
  }

  function newGame() {
    window.location.replace("/game");
  }

  return (
    <Container className="game">
      <h1>Blackjake</h1>
      {!message ? <p className="message-el">want to play around?</p> : message}
      {!newCard ? (
        <p className="card-el">
          cards: {firstCard} {secondCard}
        </p>
      ) : (
        <p className="card-el">cards: {newCard}</p>
      )}
      {!newCard ? (
        <p className="sum-el">sum: {sum}</p>
      ) : (
        <p className="sum-el">sum: {sum}</p>
      )}
      <div className="game-btn"></div>
      <Button style={{ margin: "4%" }} variant="success" onClick={startGame}>
        PLAY!
      </Button>
      <Button variant="success" onClick={newCardOnDeck}>
        NEW CARD
      </Button>

      <p className="score">Score: {score} </p>

      <Button variant="success" onClick={newGame}>
        New Game
      </Button>
    </Container>
  );
};

export default Game;
