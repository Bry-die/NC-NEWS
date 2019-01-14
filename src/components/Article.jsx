import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import Comments from "./Comments";
import PostComment from "./PostComment";
import { errorHandling } from "../errorHandling";
import Votes from "./Votes";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    currentQuery: "",
    p: 1,
    hasVoted: false
  };
  render() {
    const { hasVoted, article, comments, currentQuery } = this.state;
    return (
      <div className="main">
        <div className="singleArticle">
          <h3>{article.title}</h3>
          <div className="titleDate">
            <h4 className="articleAuthor">{`By ${article.author}`}</h4>
            <h5 className="articleDate">
              {article.created_at &&
                article.created_at
                  .split("")
                  .slice(0, 10)
                  .join("")}
            </h5>
          </div>
          <p className="articleBody">{article.body} </p>
          <Link
            className="topicLink"
            to={`/topics/${article.topic}/articles`}
          >{`Topic: ${article.topic}`}</Link>

          <Votes
            article_id={this.props.article_id}
            vote={this.vote}
            votes={article.votes}
            hasVoted={hasVoted}
          />

          <h5 className="commentCount">{`Comment count: ${
            article.comment_count
          }`}</h5>
          <div className="comments">
            <PostComment
              article={article}
              comments={comments}
              article_id={this.props.article_id}
              user={this.props.user}
              fetchArticle={this.fetchArticle}
              fetchComments={this.fetchComments}
            />
            <div className="comments">
              <Comments
                fetchComments={this.fetchComments}
                currentQuery={currentQuery}
                comments={comments}
                removeComment={this.removeComment}
                user={this.props.user}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticle();
    this.fetchComments();
  }
  fetchComments = e => {
    const { article_id } = this.props;
    let sort_by;
    if (e) {
      sort_by = e.value;
    } else {
      sort_by = "created_at";
    }
    api
      .getComments(article_id, sort_by)
      .then(comments => {
        this.setState({ comments, currentQuery: sort_by });
      })
      .catch(err => {
        if (this.state.comments.length !== 0) {
          errorHandling(err);
        }
      });
  };
  fetchArticle = () => {
    const { article_id } = this.props;
    api
      .getArticle(article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(errorHandling);
  };
  removeComment = (author, comment_id) => {
    if (author === this.props.user.username) {
      api
        .deleteComment(comment_id)
        .then(() => {
          this.fetchComments();
        })
        .catch(errorHandling);
    }
  };
  vote = (num, article_id) => {
    api
      .patchVotes(num, article_id)
      .then(article => {
        this.setState(({ article }) => ({
          article: {
            ...article,
            votes: article.votes + num
          }
        }));
      })
      .then(this.setState({ hasVoted: true }))
      .catch(errorHandling);
  };
}

export default Article;
