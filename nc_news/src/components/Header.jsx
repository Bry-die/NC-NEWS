import React from "react";

const Header = ({ user }) => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_original.png"
        alt="logo"
      />
      <p className="loggedInAs">{`You are logged in as ${user.username}`}</p>
    </div>
  );
};

export default Header;
