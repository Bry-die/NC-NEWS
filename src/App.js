import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import * as api from "./api";
import Routes from "./components/Routes";
import Auth from "./components/Auth";
import { errorHandling } from "./errorHandling";

class App extends Component {
  state = {
    topics: [],
    user: null
  };

  render() {
    const { topics, user } = this.state;
    return (
      <div className="App">
        <Auth user={user} login={this.login}>
          <Header user={user} />
          <nav className="nav">
            <Nav topics={topics} user={user} />
          </nav>
          <Routes topics={topics} user={user} />
        </Auth>
      </div>
    );
  }
  componentDidMount() {
    this.fetchTopics();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.topics !== this.state.topics) {
      this.fetchTopics();
    }
  }
  fetchTopics = () => {
    api
      .getTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(errorHandling);
  };
  login = user => {
    this.setState({ user });
  };
}

export default App;
