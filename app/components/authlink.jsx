'use strict';

import React from 'react';
import {Link} from 'react-router';
import AuthActions from '../actions/auth_actions';

const AuthLink = React.createClass({

  propTypes: {
    user: React.PropTypes.object
  },

  render() {
    var user = this.props.user;
    var link;

    if (user) {
      link = (
        <a onClick={this.handleLogout} className="right item">
          <i className="sign out icon"></i> Logout
        </a>
      );
    } else {
      link = (
        <Link to="login" className="right item">
          <i className="sign in icon"></i> Login
        </Link>
      );
    }

    return link;
  },

  handleLogout(evt) {
    evt.preventDefault();
    
    AuthActions.logout();
  }

});

module.exports = AuthLink;