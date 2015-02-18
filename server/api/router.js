import {Router} from "express";
import config from "./config";
import authRouter from "./routes/auth_routes";
import signupRouter from "./routes/signup_routes";

const versionedRouter = Router();

versionedRouter.use(config.getConfig("apiVersion"), authRouter, signupRouter);

module.exports = versionedRouter;
