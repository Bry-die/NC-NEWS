import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class PostArticle extends Component {
  state = {
    newSubmission: { title: "", body: "", user_id: null },
    acceptedResponse: false,
    response: {}
  };
  render() {
    const { newSubmission, acceptedResponse, response } = this.state;
    return (
      <div className="main">
        <form type="input" onSubmit={e => this.handleSubmit(e)}>
          <div className="inputTitle">
            <label htmlFor="title">Article title:</label>
            <input
              type="text"
              id="title"
              value={newSubmission.title}
              onChange={e => this.handleChange(e)}
              required
            />
          </div>
          <div className="inputBody">
            <label htmlFor="body">Article:</label>
            <input
              type="text"
              id="body"
              value={newSubmission.body}
              onChange={e => this.handleChange(e)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {acceptedResponse && (
          <ul>
            <li>SUCCESS!</li>
            <Link to={`/articles`}>View your article!</Link>
          </ul>
        )}
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
    newSubmission.user_id = this.props.user_id;
    api.postArticle(newSubmission).then(article => {
      console.log(article);
      this.setState(
        prevState => ({
          ...prevState,
          response: article,
          acceptedResponse: true
        }),
        () => {
          this.setState({
            newSubmission: { title: "", body: "", user_id: null }
          });
        }
      );
    });
  };
}

export default PostArticle;
