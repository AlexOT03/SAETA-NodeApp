import {data} from "../config/RutasTab"
import { Request, Response,} from "express"
export const ReturnRouteController=async(req:Request, res:Response, next:any)=> {
    try {
        const { routeID, returnID } = req.params; 
        const route = data.routes.find((route: any) => route.id == routeID);

        if (route) {
            const returnData = route.Return.find((item: any) => item.id == returnID);

            if (returnData) {
                const data = {
                    id: route.id,
                    Return: returnData
                };
                res.json(data);
            } else {
                res.status(404).json({ error: "Return not found" });
            }
        } else {
            res.status(404).json({ error: "Route not found" });
        }
    } catch (error: any) {
        next(error.message);
    }
}

export const ReturnsController=async(req:Request, res:Response, next:any)=> {
    try {
        const { routeID } = req.params; 
        const route = data.routes.find((route: any) => route.id == routeID);

        if (route) {
            const returnStops = route.Return.flatMap(returnItem =>
                returnItem.stops.map(stopItem => stopItem.stop)
            );
            res.json(returnStops)
        } else {
            res.status(404).json({ error: "Route not found" });
        }
    } catch (error: any) {
        next(error.message);
    }
}
