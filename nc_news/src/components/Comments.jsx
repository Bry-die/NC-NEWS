import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    console.log(comments);
    return <CommentCard comments={comments} />;
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
