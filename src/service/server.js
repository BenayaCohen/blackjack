import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});


function setAuthHeader(token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

async function login(username, password) {
  const response = await api.post("/auth/login", { username, password });
  return response.data;
}

/* async function login(username, password) {
  const response = await api.post("/auth/login", { username, password });
  return response.data;  register
}

async function login(username, password) {
  const response = await api.post("/auth/login", { username, password });
  return response.data; score
} */


export {login, setAuthHeader}