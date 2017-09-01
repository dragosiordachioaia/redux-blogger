import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/post-actions';

export default class PostsList extends Component {
  render() {
    return (
      <p>Posts list! </p>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPost: actions.addPost }, dispatch);
}

// export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
