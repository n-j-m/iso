'use strict';

import Reflux from 'reflux';

const AuthActions = Reflux.createActions({
  'login': {asyncResult: true},
  'logout': {asyncResult: false}
});

export default AuthActions;