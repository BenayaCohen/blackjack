import { useState } from "react";
import FirstContext from "./contex/FirstContext";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import GameHeader from "./components/GameHeader";
import AuthProvider from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);

  const handleLoginShow = () => setModalLogin(true);
  const handleLoginClose = () => setModalLogin(false);
  const handleSignUpShow = () => setModalSignUp(true);
  const handleSignUpClose = () => setModalSignUp(false);

  return (
    <Container className="main">
      <AuthProvider>
        <FirstContext.Provider
          value={{
            handleSignUpShow,
            modalLogin,
            modalSignUp,
            handleLoginClose,
            handleLoginShow,
            handleSignUpClose,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gameheader" element={<GameHeader />}></Route>
            <Route path="/game" element={<Game />}></Route>
          </Routes>
        </FirstContext.Provider>
      </AuthProvider>
    </Container>
  );
}

export default App;
