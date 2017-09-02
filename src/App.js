import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import PostsList from './containers/postsList.js';
import PostDetails from './containers/postDetails.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={PostsList} />
          <Route path="/posts/:id" component={PostDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
