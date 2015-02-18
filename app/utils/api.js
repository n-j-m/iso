const endpoint = "/api/v1";

import request from "superagent";
import LoadingActions from "../actions/loading_actions";

const _users = [
  {username: "test", password: "test"}
];

const api = {

  login(username, password) {
    return new Promise((resolve, reject) => {
      request
        .post(`${endpoint}/login`)
        .auth(username, password)
        .end(res => {
          if (res.ok) return resolve(res.body);
          reject(res.error);
        });
    });
  },

  signup(username, password, profileData) {
    return new Promise((resolve, reject) => {
      request
        .post(`${endpoint}/signup`)
        .params({
          username,
          password,
          profileData
        })
        .end(res => {
          if (res.ok) return resolve(res.body);
          reject(res.error);
        });
    });
  }

};

module.exports = api;