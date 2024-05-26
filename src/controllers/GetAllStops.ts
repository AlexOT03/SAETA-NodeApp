import { Stop } from '../Interface/index';
import {data} from "../config/RutasTab"
import { Request, Response,} from "express"

export const getAllStopsController = async (req: Request, res: Response, next: any) => {
    try {
        const goings = data.routes.flatMap(going=>
            going.Going.flatMap(going=>going.stops.map(stop=>stop.stop))
        )
        const returns = data.routes.flatMap(route =>
            route.Return.flatMap(returnRoute => returnRoute.stops.map(stop => stop.stop))
        );
        //los regresa en una sola lista
        //const allData=[...goings, ...returns];
        //los regresa por separado
        res.json({goings, returns});

    }catch (error: any) {
        next(error.message);
    }
}