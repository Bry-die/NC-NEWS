import React, { Component } from "react";
import * as api from "../api";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    console.log(comments);
    return (
      <>
        {comments.map(({ votes, created_at, author, body, comment_id }) => {
          return (
            <>
              <h5>{author}</h5>
              <h6>{created_at}</h6>
              <p>{body}</p>
              <h6>{votes}</h6>
            </>
          );
        })}
      </>
    );
  }
  componentDidMount() {
    this.fetchComments();
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
}

export default Comments;
