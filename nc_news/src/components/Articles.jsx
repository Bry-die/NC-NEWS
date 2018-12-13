import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    articles: [],
    failDelete: ""
  };
  render() {
    const { articles, failDelete } = this.state;
    return (
      <>
        {failDelete && (
          <div className="header">
            <p>{failDelete}</p>
          </div>
        )}
        {this.props.slug && (
          <div className="header">
            <Link to={`/topics/${this.props.slug}/articles/postarticle`}>
              create a new article for this topic!
            </Link>
          </div>
        )}
        <div className="main">
          <ArticleCard articles={articles} removeArticle={this.removeArticle} />
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
  removeArticle = article_id => {
    api.getArticle(article_id).then(article => {
      if (article.author === this.props.user.username) {
        api
          .deleteArticle(article_id)
          .then(() => {
            this.fetchArticles();
          })
          .catch(console.log);
      } else {
        this.setState({
          failDelete: "You cannot delete another users article, that's mean! :("
        });
      }
    });
  };
}

export default Articles;
