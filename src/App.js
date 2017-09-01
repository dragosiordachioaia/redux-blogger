import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostsList from './containers/postsList.js';

class App extends Component {
  render() {
    return (
      <PostsList />
    );
  }
}

export default App;
