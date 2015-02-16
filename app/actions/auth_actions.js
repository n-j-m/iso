'use strict';

import Reflux from 'reflux';
import LoadingActions from './loading_actions';

const AuthActions = Reflux.createActions({
  'login': {
    asyncResult: true,
    preEmit: function() {
      LoadingActions.loading();
    }
  },
  'logout': {asyncResult: false}
});

export default AuthActions;