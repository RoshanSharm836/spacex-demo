import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3059",
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("auth-token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
