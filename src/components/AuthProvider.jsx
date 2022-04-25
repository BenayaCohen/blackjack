import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contex/AuthContex";
import { login, register } from "../service/server";

function AuthProvider({ onAuthReady, children }) {
  const [activeUser, setActiveUser] = useState(
    localStorage.activeUser ? JSON.parse(localStorage.activeUser) : false
  );
  const navigate = useNavigate();

  async function handleLogin(username, password) {
    const { user } = await login(username, password);
    localStorage.activeUser = JSON.stringify(user);
    setActiveUser(user);
    navigate("/gameheader");
  }

  async function handleLogout(e) {
    localStorage.removeItem("activeUser");
    setActiveUser(false);
    navigate("/");
  }

  async function handlRgister(email, password, fullName, nickName) {
    const { user } = await register(email, password, fullName, nickName);
    localStorage.activeUser = JSON.stringify(user);
    setActiveUser(user);
  }

  async function handlScore(email, password, fullName, nickName) {
    const { user } = await register(email, password, fullName, nickName);
    localStorage.activeUser = JSON.stringify(user);
    setActiveUser(user);
  }
  // add score, last scroe, highst score
  
  return (
    <AuthContext.Provider
      value={{ activeUser, onLogin: handleLogin, onLogout: handleLogout, onRegister: handlRgister }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
