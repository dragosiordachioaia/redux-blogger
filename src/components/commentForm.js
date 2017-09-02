import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';

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
      <form onSubmit={this.onSubmit} className="comment-form">
        <Input
          label="Title"
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({title: event.target.value})}
          placeholder="Post title here"
        />
        <br />
        <Input
          label="Content"
          type="text"
          value={this.state.content}
          onChange={(event) => this.setState({content: event.target.value})}
          placeholder="Post content here"
        />
        <br />

        <Input
          label="Author"
          type="text"
          value={this.state.author}
          onChange={(event) => this.setState({author: event.target.value})}
          placeholder="Your name here"
        />
        <br />
        <Button type="submit">Submit Comment</Button>
      </form>
    );
  }
}
