'use strict';

import Reflux from 'reflux';
import AuthActions from '../actions/auth_actions';

import api from '../utils/api';

const DEFAULT_USER = {username: '__DEFAULT__'};

const GetUserMixin = {
  getUser() {
    return this.user;
  },
  getDefaultUser() {
    return DEFAULT_USER;
  }
}

const AuthStore = Reflux.createStore({

  mixins: [GetUserMixin],

  init() {
    this.user = this.getDefaultUser();
  },

  listenables: AuthActions,

  onLogin(username, password) {
    api.login(username, password)
      .then((user) =>{
        this.user = user;
        this.trigger({user});
      }).catch(error => {
        this.trigger({error});
      });
  },

  onLogout() {
    this.user = this.getDefaultUser();
    this.trigger({user: this.user});
  }

});

module.exports = AuthStore;