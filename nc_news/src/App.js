import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import * as api from "./api";

class App extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    console.log(topics);
    return (
      <div className="App">
        <Header />
        <Nav topics={topics} />
        <Articles />
        <Sidebar />
        <Footer />
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
