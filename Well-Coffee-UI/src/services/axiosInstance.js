// src/axiosInstance.js

import axios from 'axios';

// Create an instance of Axios with default configuration
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com/', // Replace with your API's base URL
  timeout: 10000, // Optional: specify a timeout for requests
  headers: {
    'Content-Type': 'application/json',
    // You can add other headers here if needed
  }
});

// Request interceptor to add authentication token or handle other global concerns
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization token if available
    const token = localStorage.getItem('token'); // Adjust based on your authentication method
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors here, such as redirecting on unauthorized status
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (e.g., redirect to login page)
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
