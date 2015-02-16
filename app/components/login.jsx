'use strict';

import React from 'react';
import AuthActions from '../actions/auth_actions';

const Login = React.createClass({
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12 col-lg-3">
              <input type="text" className="form-control" name="username" ref="username" placeholder="username" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 col-lg-3">
              <input type="text" className="form-control" name="password" ref="password" placeholder="password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 col-lg-3">
              <button onClick={this.handleLogin} type="submit" className="btn btn-primary">
                <i className="glyphicon glyphicon-log-in"></i> Sign In
              </button>
            </div>
          </div>
        </form>
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

export default Login