import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="main">
        <ArticleCard articles={articles} />
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }
  fetchArticles = () => {
    api
      .getArticles()
      .then(articles => {
        this.setState({ articles });
      })
      .catch(console.log);
  };
}

export default Articles;
