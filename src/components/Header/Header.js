import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends Component {
  render() {

    let path = this.props.location.pathname;
    let header
    switch (path) {
      case '/':
        header = 'Home'
        break
      case '/add':
        header = 'Give a gift'
        break
      case '/update':
        header = 'Update a gift'
        break
      case '/list':
        header = 'List View'
        break
      case '/map':
        header = 'Map View'
        break
      default:
        header = 'Free Your Stuff'
    }


    return (
      <div className="main-header">
      <Link to="/">
        <div className="navigation-back">
          <i className="fas fa-arrow-left navigation-icon"></i>
        </div>
      </Link>
        <h1 className="navigation-h1">{header}</h1>
      </div>
    )
  }
}
