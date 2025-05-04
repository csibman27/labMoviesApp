import React, { useContext, useState } from "react";
import PageTemplate from "../components/templateLoginPage";
import { Typography } from "@mui/material";
import { AuthContext } from "../contexts/authContext";

const LoginPage: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const { authenticate } = authContext || {};

  const handleLogin: LoginListProps['action'] = async ({ email, password }) => {
    try {
      await authenticate?.(email, password);
    } catch (error) {
      console.error("Login failed", error);
    }
    return <Typography variant="h6">Welcome, {email}!</Typography>;
  };
  

  return (
    <PageTemplate
          action={handleLogin} login={[]}  />

  );
};

export default LoginPage;



