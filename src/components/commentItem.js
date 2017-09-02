import React, { Component } from 'react';

export default class CommentItem extends Component {
  constructor() {
    super();
    this.replyToComment = this.replyToComment.bind(this);
  }

  replyToComment() {

  }

  addComment() {
    this.props.addComment(this.props.post.id);
  }

  render() {
    return (
      <div className="comment-item">
          <p>{this.props.details.author}</p>
          <h4 className="title">
            {this.props.details.title}
            <button
              className="reply-to-comment"
              onClick={this.addComment}
              >
              Reply
            </button>
          </h4>
        <p className="body">{this.props.details.content}</p>
      </div>
    );
  }
}
