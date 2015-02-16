'use strict';

import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Nav from './nav/nav';
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
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-10 col-md-12">
            <Nav user={this.state.user} />
            <RouteHandler />
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    );
  }
});

export default App;
