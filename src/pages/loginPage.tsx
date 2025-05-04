import React from "react";
import PageTemplate from "../components/templateLoginPage";


const LoginPage: React.FC = () => {
  

  return (
    <>
      <PageTemplate onLogin={function (email: string, password: string): void {
              throw new Error("Function not implemented.");
          } }        // title="Login to access movie details"
 
       
      />
    
    </>
  );
};

export default LoginPage;
