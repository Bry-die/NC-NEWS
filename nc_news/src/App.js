import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import * as api from "./api";
import Routes from "./components/Routes";

class App extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header />
        <nav className="nav">
          <Nav topics={topics} />
        </nav>
        <Articles />
        <Sidebar />
        <Footer />
        <Routes />
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
}

export default App;
