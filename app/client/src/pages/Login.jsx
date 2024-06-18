import React, { useState } from "react";
import AuthService from "../services/authService";
import http from "../services/index";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(email, password);
      if (response.data.token) {
        sessionStorage.setItem("token", JSON.stringify(response.data));
        http.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${JSON.stringify(response.data.token)}`;
        window.location.href = "/test";
      } else {
        setMessage("Invalid email or password");
      }
    } catch (error) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
