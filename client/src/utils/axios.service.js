import axios from "axios";

const axiosConfig = {
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  timeout: 10000,
  withCredentials: false
};

const axiosRequest = axios.create(axiosConfig);

axiosRequest.interceptors.response.use(
  (res) => res.data,
  (err) => {
    // Handle errors globally here if necessary
    return Promise.reject(err.message);
  }
);

export default axiosRequest;
