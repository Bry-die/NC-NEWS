import React, { Component } from "react";
import * as api from "../api";

class PostComment extends Component {
  state = {
    newSubmission: { body: "", user_id: null, article_id: null },
    acceptedResponse: false,
    response: {}
  };
  render() {
    const { newSubmission } = this.state;
    return (
      <div className="main">
        <form type="input" onSubmit={e => this.handleSubmit(e)}>
          <div className="inputBody">
            <label htmlFor="body">Comment:</label>
            <input
              type="text"
              id="body"
              value={newSubmission.body}
              onChange={e => this.handleChange(e)}
              required
            />
          </div>
          <button type="submit">Comment!</button>
        </form>
      </div>
    );
  }
  handleChange = event => {
    event.preventDefault();
    const { id, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      newSubmission: {
        ...prevState.newSubmission,
        [id]: value
      }
    }));
  };
  handleSubmit = event => {
    event.preventDefault();
    const { newSubmission } = this.state;
    newSubmission.user_id = this.props.user.user_id;
    newSubmission.article_id = this.props.article_id;
    api
      .postComment(this.props.article_id, this.state.newSubmission)
      .then(comment => {
        this.setState(
          prevState => ({
            ...prevState,
            response: comment,
            acceptedResponse: true
          }),
          () => {
            this.setState({
              newSubmission: { body: "", user_id: null, article_id: null },
              acceptedResponse: false
            });
          }
        );
      });
  };
}

export default PostComment;
