'use strict';

import React from 'react';
import AuthActions from '../actions/auth_actions';
import TransitionMixin from '../utils/transition_mixin';

const Login = React.createClass({
  mixins: [TransitionMixin],

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12 col-lg-3">
              <input onKeyPress={this.handleKeyPress} type="text" className="form-control" name="username" ref="username" placeholder="username" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 col-lg-3">
              <input onKeyPress={this.handleKeyPress} type="password" className="form-control" name="password" ref="password" placeholder="password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 col-lg-3">
              <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">
                <i className="glyphicon glyphicon-log-in"></i> Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  },

  handleKeyPress(evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      this.doLogin();
    }
  },

  handleSubmit(evt) {
    evt.preventDefault();

    this.doLogin();
  },

  doLogin() {
    var username = this.refs.username.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;

    AuthActions.login(username, password);
  }
});

export default Login