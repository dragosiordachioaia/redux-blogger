import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { Button, Icon, Divider } from 'semantic-ui-react';

import * as actions from '../actions/actions';

import PostForm from '../components/postForm';


class Admin extends Component {
  constructor() {
    super();
    this.addPost = this.addPost.bind(this);
  }

  addPost(post) {
    this.props.addPost(post);
  }

  render() {
    return (
      <div>
        <Link to="/">
          <Button secondary>
            <Icon name='chevron left' />
            Go to Home Page
          </Button>
        </Link>
        <Divider horizontal>Add a post</Divider>
        <PostForm onSubmit={this.addPost}/>
        <Divider horizontal>Other Options</Divider>
        <p>No other options yet</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPost: actions.addPost,
    deletePost: actions.deletePost,
    addComment: actions.addComment,
    deleteComment: actions.deleteComment,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
