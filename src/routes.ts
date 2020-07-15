import express, { request, response } from 'express';
import PoitsController from './Controllers/PointsController';
import ItemsController from './Controllers/ItemsController';

import multer from 'multer';
import multerConfig from './config/multer';

const routes = express.Router();
const uploads =multer(multerConfig);

const pointsController = new PoitsController();//instanciando pointscontroller
const itemsController = new ItemsController();//instanciando itemscontrooller

// index: listar vários, show: listar um unico, create, update, delete
routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);


routes.post('/points', uploads.single('image'), pointsController.create);
export default routes;