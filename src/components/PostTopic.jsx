import React, { Component } from "react";
import * as api from "../api";
import { Redirect } from "@reach/router";

class PostTopic extends Component {
  state = {
    newSubmission: { slug: "", description: "" },
    acceptedResponse: false,
    response: {}
  };
  render() {
    const { newSubmission, acceptedResponse, response } = this.state;
    return (
      <div className="main">
        <form
          type="input"
          onSubmit={e => this.handleSubmit(e)}
          className="articleForm"
        >
          <div className="inputTitle">
            <label htmlFor="slug">Name of Topic:</label>
            <input
              type="text"
              id="slug"
              value={newSubmission.slug}
              onChange={e => this.handleChange(e)}
              required
            />
          </div>
          <div className="inputBody">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={newSubmission.description}
              onChange={e => this.handleChange(e)}
              required
            />
          </div>
          <button type="submit" className="submitArticle">
            Submit
          </button>
        </form>
        {acceptedResponse && (
          <Redirect
            from="/topics/createtopic"
            to={`/topics/${response.slug}/articles/postarticle`}
            noThrow
          />
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
    api.postTopic(this.state.newSubmission).then(topic => {
      this.setState(
        prevState => ({
          ...prevState,
          response: topic,
          acceptedResponse: true
        }),
        () => {
          this.setState({ newSubmission: { slug: "", description: "" } });
        }
      );
    });
  };
}

export default PostTopic;
