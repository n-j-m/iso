'use strict';

import React from 'react';
import {Link} from 'react-router';

import AuthLink from './authlink';

const Nav = React.createClass({

  propTypes: {
    user: React.PropTypes.object
  },

  render() {

    return (
      <div className="ui borderless menu">
        <Link to="home" className="item">
          <i className="home icon"></i> Home
        </Link>
        <Link to="guides" className="item">
          <i className="help circle icon"></i> Guides
        </Link>
        <AuthLink user={this.props.user} />
      </div>
    );

  }

});

module.exports = Nav;