'use strict';

import React from 'react';
import AuthActions from '../actions/auth_actions';

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="ui form segment">
          <div className="field">
            <input type="text" name="username" ref="username" placeholder="username" />
          </div>
          <div className="field">
            <input type="password" name="password" ref="password" placeholder="password" />
          </div>
          <button onClick={this.handleLogin} className="ui submit button">Login</button>
        </div>
      </div>
    );
  },

  handleLogin(evt) {
    evt.preventDefault();

    var username = this.refs.username.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;

    AuthActions.login(username, password);
  }
});