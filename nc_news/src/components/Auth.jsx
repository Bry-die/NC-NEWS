import React from "react";
import Login from "./Login";

const Auth = ({ children, user, login }) => {
  if (user) {
    return children;
  } else {
    return <Login login={login} user={user} />;
  }
};

export default Auth;
