import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/post-actions';

import NewPostForm from '../components/newPostForm';
import PostItem from '../components/postItem';

class PostsList extends Component {
  constructor() {
    super();
    this.displayPostsList = this.displayPostsList.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.viewPost = this.viewPost.bind(this);
  }

  displayPostsList(posts) {
    return posts.map(
      post =>
        <PostItem
          post={post}
          key={post.title}
          deletePost={this.deletePost}
          viewPost={this.viewPost}
        />
    );
  }

  viewPost(postId) {
    console.log('PostsList::viewPost() postId = ', postId);
  }

  deletePost(postID) {
    this.props.deletePost(postID);
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
        <NewPostForm
          onSubmit={this.props.addPost}
        />
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
  return bindActionCreators({ addPost: actions.addPost, deletePost: actions.deletePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
