import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import { Link } from "@reach/router";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Articles extends Component {
  state = {
    articles: [],
    currentQuery: ""
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
          <Dropdown
            options={[
              { value: "created_at", label: "Newest" },
              { value: "votes", label: "Hottest" },
              { value: "comment_count", label: "Most talked about" }
            ]}
            onChange={this.fetchArticles}
            value={this.state.currentQuery}
          />
          <ArticleCard
            articles={articles}
            removeArticle={this.removeArticle}
            user={this.props.user}
          />
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
  fetchArticles = e => {
    const { slug } = this.props;
    let sort_by;
    if (e) {
      sort_by = e.value;
    } else {
      sort_by = "created_at";
    }
    api
      .getArticles(slug, sort_by)
      .then(articles => {
        this.setState({ articles, currentQuery: sort_by });
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
      }
    });
  };
}

export default Articles;
