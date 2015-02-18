'use strict';

import React from 'react';
import Router from 'react-router';

import routes from '../app/routes';

module.exports = (req, res) => {
  let router = Router.create({
    routes: routes,
    location: req.url,
    onAbort: function (redirect) {
      // If redirect does not exist, render the login route
      const location = redirect ? redirect.to : '/login';
      res.writeHead(303, {'Location': location});
      return res.send();
    },
    onError: function (err) {
      console.log('Routing Error');
      console.log(err);
    }
  });

  router.run((Handler) => {
    let content = React.renderToString(<Handler/>);
    return res.render('main', {content});
  });
};
