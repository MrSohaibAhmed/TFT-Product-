import axios from 'axios';

const axiosWithAuth = axios.create();

// Optional: disable automatic retries
axiosWithAuth.defaults.retry = 0;

// 👉 Request Interceptor
axiosWithAuth.interceptors.request.use(
  (config) => {
    // Set base URL (you can change this as needed)
    config.baseURL = 'http://139.59.119.8/api';

    // Get token from localStorage
    const accessToken = localStorage.getItem('token');

    // Add token to headers (if token exists)
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 👉 Response Interceptor
axiosWithAuth.interceptors.response.use((response) => {
  return response;
});

export default axiosWithAuth;
