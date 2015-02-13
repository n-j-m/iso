'use strict';

import Reflux from 'reflux';
import AuthActions from '../actions/auth_actions';

import api from '../utils/api';

const GetUserMixin = {
  getUser() {
    return this.user;
  }
}

const AuthStore = Reflux.createStore({

  mixins: [GetUserMixin],

  init() {
    this.user = null;
  },

  listenables: AuthActions,

  onLogin(username, password) {
    console.log('LOGIN ACTION')
    console.log('username:', username);
    console.log('password:', password);
    api.login(username, password).then((user) =>{
      this.user = user;
      this.trigger({user});
    }).catch(error => {
      this.trigger({error});
    });
  },

  onLogout() {
    console.log('LOGOUT ACTION');
    this.user = null;
    this.trigger(null);
  }

});

module.exports = AuthStore;