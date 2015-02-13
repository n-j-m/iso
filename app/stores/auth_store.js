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
    api.login(username, password).then((user) =>{
      this.user = user;
      this.trigger({user});
    }).catch(error => {
      this.trigger({error});
    });
  },

  onLogout() {
    this.user = null;
    this.trigger(null);
  }

});

module.exports = AuthStore;