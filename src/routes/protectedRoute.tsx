import React, { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useContext(AuthContext);

  // If there is no user, redirect to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, allow access to the route
  return <>{children}</>;
};

export default ProtectedRoute;

