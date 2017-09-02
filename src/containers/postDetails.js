import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { Button, Input, Icon, Header, Divider } from 'semantic-ui-react';

import * as actions from '../actions/actions';

import CommentForm from '../components/commentForm';
import CommentItem from '../components/commentItem';



class PostDetails extends Component {
  constructor() {
    super();
    this.addComment = this.addComment.bind(this);
    this.addCommentToPost = this.addCommentToPost.bind(this);
  }

  displayComments(comments) {
    if(!comments) {
      return <p>No comments yet</p>
    }
    const activePostId = this.props.match.params.id;
    const commentsForPost = comments.filter(comment => comment.parent === activePostId);
    if(!commentsForPost || commentsForPost.length === 0) {
      return <p>No comments yet</p>
    }

    const commentList = commentsForPost.map(comment =>
        <CommentItem
          details={comment}
          addComment={this.addComment}
          key={comment.id}
        />)

    return (
      <div>
        <h3>Comments</h3>
        {commentList}
      </div>
    );
  }

  addComment(comment){
    // console.log('addComment() comment = ', comment);
  }
  addCommentToPost(comment){
    const activePostId = this.props.match.params.id;
    comment.parent = activePostId;
    this.props.addComment(comment);
  }

  render() {
    const activePostId = this.props.match.params.id;
    const activePost = this.props.posts.find(post => parseInt(post.id, 10) === parseInt(activePostId, 10));

    return (
      <div>
        <Link to="/">
          <Button secondary>
            <Icon name='chevron left' />
            Go to Home Page
          </Button>
        </Link>
        <Divider horizontal>Post</Divider>
        <Header as="h2">{activePost.title}</Header>
        <p>{activePost.content}</p>
        <Divider horizontal>Add a comment</Divider>
        <CommentForm onSubmit={this.addCommentToPost}/>
        <Divider horizontal>Comments</Divider>
        {this.displayComments(this.props.comments)}
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
    addComment: actions.addComment
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
