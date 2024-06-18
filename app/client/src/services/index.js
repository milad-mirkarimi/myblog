import axios from "axios";

const http = axios.create({
  baseURL: `${
    process.env.NODE_ENV === "production" ? "" : "http://localhost:3000"
  }/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default http;
