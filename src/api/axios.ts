// src/api/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5000", // <- your deployed backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
