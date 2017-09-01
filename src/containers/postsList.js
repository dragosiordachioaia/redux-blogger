import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/post-actions';

class PostsList extends Component {
  constructor() {
    super();

    this.createNewPost = this.createNewPost.bind(this);
  }

  createNewPost() {
    console.log('props = ', this.props);
    this.props.addPost({
      title: 'my first post' + String(Math.random()),
      content: 'this is the content of the first post',
    });
  }

  displayPostsList(posts) {
    return posts.map(post => <p key={post.title}> { post.title } </p>);
  }

  render() {
    let list;
    if(!this.props.posts || this.props.posts.length === 0) {
      list = <p>Add a post to see it here</p>;
    } else {
      list = this.displayPostsList(this.props.posts);
    }
    return (
      <div>
        <button onClick={this.createNewPost}>Add Post</button>
        {list}
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
  return bindActionCreators({ addPost: actions.addPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
