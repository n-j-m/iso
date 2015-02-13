'use strict';

import React from 'react';
import AuthMixin from '../utils/auth_mixin';

const Guides = React.createClass({
  mixins: [AuthMixin],
  
  render() {
    return (
      <div>
        <h1>Guides</h1>
        <p>Coming soon...</p>
      </div>
    );
  }
});

module.exports = Guides;
