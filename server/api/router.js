import {Router} from 'express';
import config from './config';
import authRouter from './routes/auth_routes';

const versionedRouter = Router();

versionedRouter.use(config.getConfig('apiVersion'), authRouter);

module.exports = versionedRouter;
