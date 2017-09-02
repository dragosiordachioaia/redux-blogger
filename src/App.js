import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import PageHeader from './components/pageHeader.js';
import PageFooter from './components/pageFooter.js';
import PostsList from './containers/postsList.js';
import PostDetails from './containers/postDetails.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <PageHeader />
          <div className="main-content">
            <Route exact path="/" component={PostsList} />
            <Route path="/posts/:id" component={PostDetails} />
          </div>
          <PageFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
