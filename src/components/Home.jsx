import { Container } from "react-bootstrap";
import Login from "./Login";
import { useContext } from "react";
import Register from "./Register";
import FirstContext from "../contex/FirstContext";
import Header from "./Header";
import Game from "./Game";
import GameHeader from "./GameHeader";

const Home = () => {
  const {
    auth,
    hendelLogin,
    handleSignUpShow,
    modalLogin,
    modalSignUp,
    handleLoginClose,
    handleLoginShow,
    handleSignUpClose,
  } = useContext(FirstContext);
  return (
    <Container className="header">
      <Header />
      <Login
        modalLogin={modalLogin}
        handleLoginClose={handleLoginClose}
        handleLoginShow={handleLoginShow}
        hendelLogin={hendelLogin}
      />
      <Register
        modalSignUp={modalSignUp}
        handleSignUpClose={handleSignUpClose}
        handleSignUpShow={handleSignUpShow}
      />
      {auth ? <GameHeader /> : ""}
      {auth ? <Game /> : ""}
    </Container>
  );
};

export default Home;
