import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react'

export default class PostForm extends Component{
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
      <form className="post-form" onSubmit={this.onSubmit}>
        <Input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({title: event.target.value})}
          placeholder="Post title here"
        />
        <Input
          type="text"
          value={this.state.content}
          onChange={(event) => this.setState({content: event.target.value})}
          placeholder="Post content here"
        />
        <Button type="submit">Create Post</Button>
      </form>
    );
  }
}
