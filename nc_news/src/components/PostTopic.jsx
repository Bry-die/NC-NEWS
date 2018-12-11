import React, { Component } from "react";
import * as api from "../api";

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
        <form type="input" onSubmit={this.handleSubmit}>
          <div className="inputSlug">
            <label htmlFor="slug">Name of Topic:</label>
            <input
              type="text"
              id="slug"
              value={newSubmission.slug}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="inputDesc">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={newSubmission.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {acceptedResponse && (
          <ul>
            <li>SUCCESS!</li>
            <li>Topic: {response.slug}</li>
            <li>Description: {response.description}</li>
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
    api.postTopic(this.state.newSubmission).then(topic => {
      console.log(topic);
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
