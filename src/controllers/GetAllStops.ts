import { Stop } from '../Interface/index';
import {data} from "../config/RutasTab"
import { Request, Response,} from "express"

export const getAllGoingController = async (req: Request, res: Response, next: any) => {
    try {
        const goings = data.routes.flatMap(going=>
            going.Going.flatMap(going=>going.stops.map(stop=>stop.stop))
        )
       
        res.json(goings);

    }catch (error: any) {
        next(error.message);
    }
}
export const getAllReturnController = async (req: Request, res: Response, next: any) => {
    try {
        const returns = data.routes.flatMap(route =>
            route.Return.flatMap(returnRoute => returnRoute.stops.map(stop => stop.stop))
        );

        res.json(returns);

    }catch (error: any) {
        next(error.message);
    }
}