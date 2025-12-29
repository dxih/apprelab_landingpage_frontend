// src/api/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://apprelab-landingpage-backend.onrender.com", // <- your deployed backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
