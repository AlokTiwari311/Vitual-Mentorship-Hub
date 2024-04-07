import React from "react";
import signupImg from "../assets/signup.png";
import Template from "../components/Template";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Guiding Light: Your Virtual Mentorship Hub"
      desc1="Enter with an open mind, leave with boundless possibilities. "
      desc2="Welcome to our virtual mentorship hub, where guidance meets innovation."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Signup;
