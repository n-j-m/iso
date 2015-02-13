'use strict';

import Reflux from 'reflux';

const AuthActions = Reflux.createActions({
  'login': {asyncResult: false},
  'logout': {asyncResult: false}
});

module.exports = AuthActions;