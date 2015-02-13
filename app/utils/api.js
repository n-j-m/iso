var endpoint = '/api/v1';

import request from 'superagent';

const _users = [
  {username: 'test', password: 'test'}
];

const api = {

  login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var users = _users.filter((u) => {
          return (u.username === username && u.password === password);
        });
        if (users.length > 0) resolve(users[0]);
        else reject({error: new Error('Invalid username and/or password')});
      }, 0);
    });
  }

};

module.exports = api;