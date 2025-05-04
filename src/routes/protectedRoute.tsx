import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const ProtectedRoute: React.FC<React.PropsWithChildren> = (props) => {
  const authContext = useContext(AuthContext);
  const { token } = authContext || {};
  const location = useLocation();

  if(!token) {
    return <Navigate to={"/login"} replace state={{ intent: location }} />;
  }

  return props.children;
};

export default ProtectedRoute;
