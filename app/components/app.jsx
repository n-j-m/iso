'use strict';

import React from 'react';
import {RouteHandler, Link} from 'react-router';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to='app'>Home</Link></li>
            <li><Link to='guides'>Guides</Link></li>
            <li><Link to="login">Login</Link></li>
          </ul>
        </header>
        <div className="ui page grid">
          <div className="row">
            <div className="three wide computer only column"></div>
            <div className="ten wide computer sixteen wide tablet sixteen wide mobile column">
              <RouteHandler/>
            </div>
            <div className="three wide computer only column"></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
