'use strict';

import React from 'react';

module.exports = React.createClass({
  render() {
    return (
      <div className="ui form segment">
        <div className="field">
          <input type="text" name="username" ref="username" placeholder="username" />
        </div>
        <div className="field">
          <input type="password" name="password" ref="password" placeholder="password" />
        </div>
        <div className="ui submit button">Login</div>
      </div>
    );
  }
});