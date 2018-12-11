import React, { Component } from "react";

class Login extends Component {
  state = {
    input: ""
  };
  render() {
    const { input } = this.state;
    const { login } = this.props; 
    return (
      <form onSubmit={() => login()}>
        <label htmlFor="username">USERNAME:</label>
        <input
          type="text"
          id="username"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </form>
    );
  }
  handleChange = event => {
    console.log(this.state.input);
    event.preventDefault();
    const { value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      input: value
    }));
  };
  handleSubmit = () => {
    const { input } = this.state;
    console.log(input);
    api
      .getUser(input)
      .then(input => {
        this.props.login();
      })
      .catch(console.log);
  };
  }
}

export default Login;
