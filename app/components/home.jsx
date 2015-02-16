'use strict';

import React from 'react';
import AuthMixin from '../utils/auth_mixin';

const Home = React.createClass({
  mixins: [AuthMixin],

  render() {
    return (
      <h1>Home</h1>
    );
  }
});

export default Home;
