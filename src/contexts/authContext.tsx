import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fakeAuth } from "../util";
import { AuthContextInterface } from "../types/interfaces";

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthContextProvider:React.FC<React.PropsWithChildren> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        setToken(storedToken);
      }
    }, []);

    const authenticate = async (email: string, password: string) => {
        try {
          const token = await fakeAuth(email, password);
          setToken(token);
          localStorage.setItem("authToken", token);
          // console.log(token)
          const origin = location.state?.intent?.pathname || "/";
          navigate(origin, { replace: true });
        } catch (error) {
          console.error("Authentication failed:", error);
        }
      };
      
      

      const signout = () => {
        setToken(null);
        localStorage.removeItem("authToken");
        navigate("/login");
      };
      

return (
    <AuthContext.Provider
      value={{
        token,
        authenticate,
        signout,
      }}>
        {children}
      </AuthContext.Provider>
    );
}