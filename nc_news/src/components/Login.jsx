import React, { Component } from "react";

class Login extends Component {
  state = {
    input: ""
  };
  render() {
    const { input } = this.state;
    console.log(input);
    return (
      <form>
        <label htmlFor="username">USERNAME:</label>
        <input
          type="text"
          id="username"
          value={this.state.input}
          onChange={() => this.handleChange()}
        />
      </form>
    );
  }
  handleChange = event => {
    console.log(event);
    event.preventDefault();
    const { value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      input: {
        ...prevState.input,
        value
      }
    }));
  };
}

export default Login;
