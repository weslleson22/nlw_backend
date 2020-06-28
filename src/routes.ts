import express, { request, response } from 'express';
import PoitsController from './Controllers/PointsController';
import ItemsController from './Controllers/ItemsController';

const routes = express.Router();

const pointsController = new PoitsController();//instanciando pointscontroller
const itemsController = new ItemsController();

// index: listar vários, show: listar um unico, create, update, delete
routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;