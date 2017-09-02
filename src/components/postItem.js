import React, { Component } from 'react';

export default class PostItem extends Component {
  constructor() {
    super();
    this.deletePost = this.deletePost.bind(this);
  }

  deletePost() {
    this.props.deletePost(this.props.post.id);
  }

  render() {
    return (
      <div className="post-item">
        <h3 className="title">
          {this.props.post.title}
          <button
            className="delete-post"
            onClick={this.deletePost}
            >
            Delete
          </button>
        </h3>

        <p className="body">{this.props.post.content}</p>
      </div>
    );
  }
}
