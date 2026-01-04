import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://apprelab-landingpage-backend.onrender.com/api';

const getToken = () => sessionStorage.getItem('adminToken'); // ✅ Changed from localStorage

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;