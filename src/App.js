import { useState } from "react";
import FirstContext from "./contex/FirstContext";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import Game from "./components/Game";
import GameHeader from "./components/GameHeader";
import AuthProvider from "./components/AuthProvider";

function App() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleLoginShow = () => setModalLogin(true);
  const handleLoginClose = () => setModalLogin(false);
  const handleSignUpShow = () => setModalSignUp(true);
  const handleSignUpClose = () => setModalSignUp(false);
   

  let navigate = useNavigate()
  const login = () => {
    setAuth(true);
    navigate("/gameheader");
  };

  const logOut = () => {
    setAuth(false)
    window.location.pathname = "/";
  }

  return (
    
    <Container className="main">
    <AuthProvider>
      <FirstContext.Provider
        value={{
          login,
          logOut,
          auth,
          handleSignUpShow,
          modalLogin,
          modalSignUp,
          handleLoginClose,
          handleLoginShow,
          handleSignUpClose,
        }}
      >
        <Routes>
          <Route path="/" element={!auth ? <Home /> : ""}></Route>
          <Route path="gameheader" element={<GameHeader />}></Route>
          <Route path="game" element={<Game />}></Route>
        </Routes>
      </FirstContext.Provider>
      </AuthProvider>
    </Container>
  );
}

export default App;
