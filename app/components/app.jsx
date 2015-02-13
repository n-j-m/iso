'use strict';

import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Nav from './nav';
import Reflux from 'reflux';

import authStore from '../stores/auth_store';
import {Navigation} from 'react-router';

const App = React.createClass({
  mixins: [Reflux.ListenerMixin, Navigation],

  getInitialState() {
    return {
      user: null 
    };
  },

  componentDidMount() {
    this.listenTo(authStore, this.onAuth);
  },

  onAuth(userResponse) {
    // TODO - Handle errors
    var user = userResponse.user;
    this.setState({user});
    if (user) {
      this.transitionTo('/');
    } else {
      this.transitionTo('/login');
    }
  },

  render() {
    return (
      <div className="ui page grid">
        <div className="row">
          <div className="three wide computer only column"></div>
          <div className="ten wide computer sixteen wide tablet sixteen wide mobile column">
            <Nav user={this.state.user} />
            <RouteHandler />
          </div>
          <div className="three wide computer only column"></div>
        </div>
      </div>
    );
  }
});

module.exports = App;
