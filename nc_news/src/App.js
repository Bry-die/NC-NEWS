import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import * as api from "./api";
import Routes from "./components/Routes";
import Auth from "./components/Auth";

class App extends Component {
  state = {
    topics: [],
    user: null
  };

  render() {
    const { topics, user } = this.state;
    return (
      <div className="App">
        <Auth user={user}>
          <Header />
          <nav className="nav">
            <Nav topics={topics} />
          </nav>
          <Sidebar />
          <Footer />
          <Routes topics={topics} />
        </Auth>
      </div>
    );
  }
  componentDidMount() {
    this.fetchTopics();
  }
  fetchTopics = () => {
    api
      .getTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(console.log);
  };
  authenticateUser = () => {
    const { user } = this.state;
    api
      .getUser(user)
      .then(response => {
        this.setState({ response });
      })
      .catch(console.log);
  };
}

export default App;
