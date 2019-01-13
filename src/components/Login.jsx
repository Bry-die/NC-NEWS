import React, { Component } from "react";
import * as api from "../api";

class Login extends Component {
  state = {
    input: "tickle122",
    error: ""
  };
  render() {
    const { input, error } = this.state;
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
        {error && <p>{error}</p>}
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
      .catch(err => {
        this.setState({
          error: "Sorry this username doesn't exist."
        });
      });
  };
}

export default Login;
