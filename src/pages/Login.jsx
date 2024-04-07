import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png";

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Enter with an open mind, leave with boundless possibilities. "
      desc2="Welcome to our virtual mentorship hub, where guidance meets innovation."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;
