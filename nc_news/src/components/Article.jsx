import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import Comments from "./Comments";
import PostComment from "./PostComment";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    failDelete: ""
  };
  render() {
    const { article, comments } = this.state;
    return (
      <div className="main">
        <h3>{article.title}</h3>
        <div className="titleDate">
          <h4 className="articleAuthor">{`By ${article.author}`}</h4>
          <h5>{article.created_at}</h5>
        </div>
        <p>{article.body} </p>
        <Link to={`/topics/${article.topic}/articles`}>{`Topic: ${
          article.topic
        }`}</Link>
        <h5>{`Comment count: ${article.comment_count}`}</h5>
        <div className="comments">
          <PostComment
            article={article}
            comments={comments}
            article_id={this.props.article_id}
            user={this.props.user}
            fetchArticle={this.fetchArticle}
            fetchComments={this.fetchComments}
          />
          <div>
            <Comments comments={comments} removeComment={this.removeComment} />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticle();
    this.fetchComments();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    if (prevState.comments.length !== this.state.comments.length) {
      this.fetchComments();
      this.fetchArticle();
    }
  }
  fetchComments = () => {
    const { article_id } = this.props;
    api
      .getComments(article_id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(console.log);
  };
  fetchArticle = () => {
    const { article_id } = this.props;
    api
      .getArticle(article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(console.log);
  };
  removeComment = (author, comment_id) => {
    if (author === this.props.user.username) {
      api
        .deleteComment(comment_id)
        .then(() => {
          this.fetchComments();
        })
        .catch(console.log);
    } else {
      this.setState({
        failDelete: "You cannot delete another users comment, that's mean! :("
      });
    }
  };
}

export default Article;
