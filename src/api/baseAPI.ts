import axios from "axios";

// specify config defaults that will be applied to every request
const api = axios.create({
  baseURL: "https://api.supermetrics.com/assignment",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
