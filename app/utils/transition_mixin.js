'use strict';

import LoadingActions from '../actions/loading_actions';
import authStore from '../stores/auth_store';
import Config from '../config';

const TransitionMixin = {

  statics: {
    willTransitionFrom(transition) {
      LoadingActions.loading();
    },
  },

  componentDidMount() {
    console.log('did mount');
    LoadingActions.loadingComplete();
  }

};

export default TransitionMixin;