import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import Comments from "./Comments";

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    const { article } = this.state;
    return (
      <div className="main">
        <h3>{article.title}</h3>
        <div className="titleDate">
          <h4>{`By ${article.author}`}</h4>
          <h5>{article.created_at}</h5>
        </div>
        <p>{article.body} </p>
        <Link to={`/topics/${article.topic}/articles`}>{`Topic: ${
          article.topic
        }`}</Link>
        <h5>{`Comment count: ${article.comment_count}`}</h5>
        <div className="comments">
          <Comments article_id={this.props.article_id} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticle();
  }
  fetchArticle = () => {
    const { article_id } = this.props;
    api
      .getArticle(article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(console.log);
  };
}

export default Article;
