'use strict';

import React from 'react';
import AuthActions from '../../actions/auth_actions';
import NavLink from './navlink';

const AuthLink = React.createClass({

  propTypes: {
    user: React.PropTypes.object
  },

  render() {
    var user = this.props.user;
    var link;

    if (user) {
      link = (
        <li>
          <a href="#" onClick={this.handleLogout} className="right item">
            <i className="glyphicon glyphicon-log-out"></i> Logout
          </a>
        </li>
      );
    } else {
      link = (
        <NavLink to="login" className="right item">
          <i className="glyphicon glyphicon-log-in"></i> Login
        </NavLink>
      );
    }

    return link;
  },

  handleLogout(evt) {
    evt.preventDefault();
    
    AuthActions.logout();
  }

});

export default AuthLink;