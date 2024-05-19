import {RuotesController, TripsController} from '../controllers/index';
import { Router } from "express";

const routes = Router();

routes.get('/Routes', RuotesController)
routes.get('/Trips/:id', TripsController)

export default routes