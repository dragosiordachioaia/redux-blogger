import React, { Component } from 'react';
import { Button, Input, Form, Label, TextArea } from 'semantic-ui-react';

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
      <Form className="comment-form" onSubmit={this.onSubmit}>
        <Form.Field>
          <Label pointing="below">Choose a title</Label>
          <Input
            type="text"
            value={this.state.title}
            onChange={(event) => this.setState({title: event.target.value})}
          />
        </Form.Field>
        <Form.Field>
          <Label pointing="below">Choose a content</Label>
          <TextArea
            type="text"
            value={this.state.content}
            onChange={(event) => this.setState({content: event.target.value})}
            label="Content"
          />
        </Form.Field>
        <Form.Field>
          <Label pointing="below">Choose an author</Label>
          <Input
            type="text"
            value={this.state.content}
            onChange={(event) => this.setState({author: event.target.value})}
            label="Content"
          />
        </Form.Field>
        <Button type="submit" primary>Add Comment</Button>
      </Form>
    );
  }
}
