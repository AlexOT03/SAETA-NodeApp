import {data} from "../config/RutasTab"
import { Request, Response,} from "express"
export const GoingRouteController=async(req:Request, res:Response, next:any)=> {
    try {
        const { routeID, goingID } = req.params; 
        const route = data.routes.find((route: any) => route.id == routeID);

        if (route) {
            const going = route.Going.find((going: any) => going.id == goingID);

            if (going) {
                const data = {
                    id: route.id,
                    Going: going
                };
                res.json(data);
            } else {
                res.status(404).json({ error: "Going not found" });
            }
        } else {
            res.status(404).json({ error: "Route not found" });
        }
    } catch (error: any) {
        next(error.message);
    }
}


