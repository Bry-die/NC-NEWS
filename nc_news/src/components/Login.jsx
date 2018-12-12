import React, { Component } from "react";
import * as api from "../api";

class Login extends Component {
  state = {
    input: ""
  };
  render() {
    const { input } = this.state;
    console.log(input);
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="username">USERNAME:</label>
        <input
          type="text"
          id="username"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button>Login</button>
      </form>
    );
  }
  handleChange = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      input: value
    }));
  };
  handleSubmit = event => {
    event.preventDefault();
    const { input } = this.state;
    api
      .getUser(input)
      .then(user => {
        this.props.login(user);
      })
      .catch(console.log);
  };
}

export default Login;
