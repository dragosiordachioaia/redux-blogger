import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/post-actions';

class PostDetails extends Component {
  constructor() {
    super();

  }

  render() {
    console.log('PostDetails::render() props = ', this.props);
    const activePostId = this.props.match.params.id;
    const activePost = this.props.posts.find(post => parseInt(post.id) === parseInt(activePostId));
    console.log('posts = ', this.props.posts);
    console.log('activePost = ', activePost);
    return (
      <div>
        <Link to="/">
          Back to home
        </Link>
        <h2>{activePost.title}</h2>
        <p>{activePost.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPost: actions.addPost, deletePost: actions.deletePost }, dispatch);
}

export default connect(mapStateToProps)(PostDetails);
