import React, { useState } from "react";
import AuthService from "../services/authService";
import http from "../services/index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await AuthService.login(email, password);
      if (response.data.token) {
        sessionStorage.setItem("token", JSON.stringify(response.data));
        http.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        navigate("/create-article");
      } else {
        setMessage("Invalid email or password");
      }
    } catch (error) {
      setMessage("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-8 mx-auto max-w-2xl h-screen">
      <h2 className="font-garamond text-4xl md:text-5xl lg:text-8xl">Login</h2>

      <form onSubmit={handleLogin} className="mt-8">
        <label htmlFor="email">
          Email
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="enter your email"
            className="search-input w-full rounded"
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="enter your password"
            className="search-input w-full rounded"
          />
        </label>
        <button className="w-full rounded px-6 py-2 color text-white hover:opacity-90 border-none bg-gray-800">
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
