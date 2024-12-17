import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token"); // Verifica o token de autenticação
  return !!token;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
