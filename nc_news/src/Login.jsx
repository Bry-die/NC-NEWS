import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form>
        <label htmlFor="username">USERNAME:</label>
        <input type="text" id="username" />
      </form>
    );
  }
}

export default Login;
