import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contex/AuthContex";
import { login } from "../service/server";

function AuthProvider({ onAuthReady, children }) {
  const [activeUser, setActiveUser] = useState(
    localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null
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
    localStorage.removeItem("token");
    setActiveUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ activeUser, onLogin: handleLogin, onLogout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
