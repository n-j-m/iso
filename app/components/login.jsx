'use strict';

import React from 'react';

module.exports = React.createClass({
  render() {
    return (
      <form>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    );
  }
});