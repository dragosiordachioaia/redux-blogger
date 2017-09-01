import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PostsList extends Component {
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
  return bindActionCreators({ addPost: addPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
