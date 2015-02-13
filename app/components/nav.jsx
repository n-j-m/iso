'use strict';

import React from 'react';
import {Link} from 'react-router';

module.exports = React.createClass({

  render() {

    return (
      <div className="ui borderless menu">
        <Link to="home" className="item">
          <i className="home icon"></i> Home
        </Link>
        <Link to="guides" className="item">
          <i className="help circle icon"></i> Guides
        </Link>
        <Link to="login" className="right item">
          <i className="sign in icon"></i> Login
        </Link>
      </div>
    );

  }

});