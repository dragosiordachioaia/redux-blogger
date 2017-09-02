import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostItem extends Component {
  constructor() {
    super();
    this.deletePost = this.deletePost.bind(this);
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  deletePost() {
    this.props.deletePost(this.props.post.id);
  }

  onTitleClick(event) {
    event.preventDefault();
    this.props.viewPost(this.props.post.id);
  }

  render() {
    return (
      <div className="post-item">
        <Link to={`/posts/${this.props.post.id}`}>
          <h3 className="title">
            {this.props.post.title}
            {/* <button
              className="delete-post"
              onClick={this.deletePost}
              >
              Delete
            </button> */}
          </h3>
        </Link>
        <p className="body">{this.props.post.content}</p>
      </div>
    );
  }
}
