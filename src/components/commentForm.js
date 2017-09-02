import React, { Component } from 'react';

export default class CommentForm extends Component{
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: "good stuff, dude",
      content: "more details about why it's good",
      author: 'Dragos',
    }
  }

  onSubmit(event) {
    event.preventDefault();

    if(this.state.title.length === 0 || this.state.content.length === 0)  {
      return;
    }

    this.props.onSubmit({
      title: this.state.title,
      content: this.state.content,
      author: this.state.author
    });
    this.setState({
      title: "",
      content: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({title: event.target.value})}
          placeholder="Post title here"
        />
        <br />
        <textarea
          type="text"
          value={this.state.content}
          onChange={(event) => this.setState({content: event.target.value})}
          placeholder="Post content here"
        />
        <br />
        <input
          type="text"
          value={this.state.author}
          onChange={(event) => this.setState({author: event.target.value})}
          placeholder="Your name here"
        />
        <br />
        <button type="submit">Submit Comment</button>
      </form>
    );
  }
}
