'use strict';

import React from 'react';

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
          <button className="ui submit button">Login</button>
        </div>
      </div>
    );
  }
});