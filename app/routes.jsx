'use strict';

import React from 'react';
import {Route, DefaultRoute} from 'react-router';

module.exports = (
  <Route name='app' path='/' handler={require('./components/app')}>
    <DefaultRoute name="home" handler={require('./components/home')} />
    <Route name="guides" handler={require('./components/guides')} />
    <Route name="login" path="/login" handler={require('./components/login')} />
  </Route>
);
