import React, { Component } from 'react';
import headerImage from '../images/header.jpg';

export default class PageHeader extends Component {
  render() {
    return (
      <header>
        <h2>good morning.</h2>
        <img src={headerImage} alt="Header - mountains"/>
      </header>
    );
  }
}
