import {RuotesController, RouteIDController, GoingRouteController, ReturnRouteController, getAllGoingController, getAllReturnController, ReturnsController, GoingsController, } from '../controllers/index';
import { Router } from "express";

const routes = Router();

routes.get('/Routes', RuotesController)
routes.get('/Routes/:id', RouteIDController)
routes.get('/Routes/Going/:routeID/:goingID', GoingRouteController)
routes.get('/Routes/Return/:routeID/:returnID', ReturnRouteController)
routes.get('/Goings', getAllGoingController)
routes.get('/Returns', getAllReturnController)
routes.get('/Routes/Returns/:routeID', ReturnsController)
routes.get('/Routes/Goings/:routeID', GoingsController)

export default routes