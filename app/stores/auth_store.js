'use strict';

import Reflux from 'reflux';
import AuthActions from '../actions/auth_actions';

const AuthStore = Reflux.createStore({

  listenables: AuthActions,

  onLogin(username, password) {
    console.log('LOGIN ACTION')
    console.log('username:', username);
    console.log('password:', password);
    this.trigger({username, password});
  },

  onLogout() {
    console.log('LOGOUT ACTION');
    this.trigger(null);
  }

});

module.exports = AuthStore;