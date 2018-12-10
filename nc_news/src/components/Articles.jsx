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
  componentDidUpdate(prevProps) {
    console.log(prevProps);
  }
  fetchArticles = () => {
    const { slug } = this.props;
    api
      .getArticles(slug)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(console.log);
  };
}

export default Articles;
