import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
  },
});

export default API;
