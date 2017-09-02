import React, { Component } from 'react';

export default class NewPostForm extends Component{
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: "first title",
      content: "lorem ipsum dolor",
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
        <input
          type="text"
          value={this.state.content}
          onChange={(event) => this.setState({content: event.target.value})}
          placeholder="Post content here"
        />
        <button type="submit">Create Post</button>
      </form>
    );
  }
}
