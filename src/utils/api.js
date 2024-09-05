import axios from 'axios';

// Create an Axios instance with default configurations
const apiClient = axios.create({
  baseURL: 'http://localhost:9000', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  config => {
    // Add authentication token to request headers if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  response => {
    // Process response data if needed
    return response;
  },
  error => {
    // Handle response errors
    if (error.response && error.response.status === 401) {
      // Example: Redirect to login page if unauthorized
      // This example assumes you have a router set up
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
