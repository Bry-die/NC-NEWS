import React from "react";
import Login from "./Login";

const Auth = ({ children, user }) => {
  if (user) {
    return children;
  } else {
    return <Login user={user} />;
  }
};

export default Auth;
