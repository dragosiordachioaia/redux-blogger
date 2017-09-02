import React, { Component } from 'react';
import { Button, Form, Input, Label, TextArea } from 'semantic-ui-react';

export default class PostForm extends Component{
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: "",
      content: "",
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
      <Form className="post-form" onSubmit={this.onSubmit}>
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
            placeholder="Post content here"
            label="Content"
          />
        </Form.Field>
        <Button type="submit">Create Post</Button>
      </Form>
    );
  }
}
