
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

module.exports = AuthMixin;