import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});

async function login(email, password) {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
}

async function register(email, password, fullName, nickName) {
  const response = await api.post("/auth/login", {
    email,
    password,
    fullName,
    nickName,
  });
  return response.data;
}

async function addScore(score) {
  const response = await api.get(`/score`);
  return response.data;
}

async function highScore() {
  const response = await api.post("/score");
  return response.data;
}

export { login, register, addScore, highScore };
