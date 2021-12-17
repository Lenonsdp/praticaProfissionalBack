import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import PromocoesController from './app/controllers/PromocoesController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/promocoes', PromocoesController.index);
routes.get('/promocoes/show', PromocoesController.show);
routes.get('/listTitle', PromocoesController.indexTitles);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/promocoes', PromocoesController.store);

module.exports = routes;
