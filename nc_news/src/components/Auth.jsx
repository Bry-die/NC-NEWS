import React from "react";
import Login from "./Login";

const Auth = ({ children, user, fetchUser }) => {
  if (user) {
    return children;
  } else {
    return <Login login={Login} user={user} />;
  }
};

export default Auth;
