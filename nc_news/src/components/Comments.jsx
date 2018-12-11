import React, { Component } from "react";
import * as api from "../api";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <p className="main">Comments here</p>
      </div>
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
