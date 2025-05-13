import axios from "axios";

const deploy = 'https://money-track-backend-production.up.railway.app';
// const local = 'http://localhost:3000';

const api = axios.create({
  baseURL: deploy,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;