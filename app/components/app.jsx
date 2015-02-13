'use strict';

import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Nav from './nav';
import Reflux from 'reflux';

import authStore from '../stores/auth_store';

const App = React.createClass({
  mixins: [Reflux.ListenerMixin],

  componentDidMount() {
    this.listenTo(authStore, this.onAuth);
  },

  onAuth(user) {
    console.log('user:', user);
  },

  render() {
    return (
      <div className="ui page grid">
        <div className="row">
          <div className="three wide computer only column"></div>
          <div className="ten wide computer sixteen wide tablet sixteen wide mobile column">
            <Nav />
            <RouteHandler/>
          </div>
          <div className="three wide computer only column"></div>
        </div>
      </div>
    );
  }
});

module.exports = App;
