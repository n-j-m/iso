'use strict';

import LoadingActions from '../actions/loading_actions';
import authStore from '../stores/auth_store';

const TransitionMixin = {

  statics: {
    willTransitionFrom(transition) {
      LoadingActions.loading();
    }
  },

  componentDidMount() {
    LoadingActions.loadingComplete();
  }

};

export default TransitionMixin;