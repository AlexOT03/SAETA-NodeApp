import {RuotesController, RouteIDController, GoingRouteController, ReturnRouteController, getAllStopsController} from '../controllers/index';
import { Router } from "express";

const routes = Router();

routes.get('/Routes', RuotesController)
routes.get('/Routes/:id', RouteIDController)
routes.get('/Routes/Going/:routeID/:goingID', GoingRouteController)
routes.get('/Routes/Return/:routeID/:returnID', ReturnRouteController)
routes.get('/Stops', getAllStopsController)

export default routes