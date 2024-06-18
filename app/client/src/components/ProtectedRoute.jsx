import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/authService";

const ProtectedRoute = ({ children }) => {
  const currentUser = AuthService.getCurrentUser();
  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
