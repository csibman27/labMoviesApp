import React, { useContext } from "react";
import PageTemplate from "../components/templateLoginPage";
import { AuthContext } from "../contexts/authContext";
import { LoginListProps } from "../types/interfaces";

const LoginPage: React.FC = () => {

  const authContext = useContext(AuthContext);
  const { authenticate } = authContext || {};

  const handleLogin: LoginListProps['action'] = async ({ email, password }) => {
    try {
      await authenticate?.(email, password);
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  

  return (
    <PageTemplate
          action={handleLogin} />

  );
};

export default LoginPage;



