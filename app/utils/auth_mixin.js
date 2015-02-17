'use strict';

import authStore from '../stores/auth_store';

const AuthMixin = {

  statics: {
    willTransitionTo(transition) {
      if (!authStore.getUser()) {
        transition.redirect('/login');
      }
    }
  }

};

export default AuthMixin;