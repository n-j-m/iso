'use strict';

import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Nav from './nav';

const App = React.createClass({
  render: function () {
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
