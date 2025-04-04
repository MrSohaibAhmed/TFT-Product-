import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosInstance,
} from 'axios';

const axiosWithAuth: AxiosInstance = axios.create();

// Disable automatic retries (if axios-retry or similar is used)
(axiosWithAuth.defaults as { retry?: number }).retry = 0;

// Add a request interceptor
axiosWithAuth.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Set baseURL dynamically if needed
    config.baseURL = '';

    const accessToken = localStorage.getItem('accessToken');

    if (accessToken && config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosWithAuth.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosWithAuth;
