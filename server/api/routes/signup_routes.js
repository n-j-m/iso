"use strict";

import SignupController from "../controllers/signup";

import {Router} from "express";

const router = Router();

const signupRoute = router.route("/signup");

signupRoute.post((req, res) => {
  SignupController.signup(
    req.params.firstname,
    req.params.lastname,
    req.params.nickname
  ).then((profile) => {
    res.json(profile);
  }).catch((error) => {
    res.send(error);
  });
});

export default router;