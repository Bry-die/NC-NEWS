import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    articles: [],
    p: 1
  };
  render() {
    const { articles } = this.state;
    return (
      <>
        {this.props.slug && (
          <div className="header">
            <Link to={`/topics/${this.props.slug}/articles/postarticle`}>
              create a new article for this topic!
            </Link>
          </div>
        )}
        <div className="main">
          <ArticleCard articles={articles} />
        </div>
      </>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slug !== this.props.slug) {
      this.fetchArticles();
    }
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
