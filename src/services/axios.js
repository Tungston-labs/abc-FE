import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Interceptor for token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;

  // ✅ Don't manually set Content-Type — let Axios handle it based on data type
  return config;
});

export default api;
