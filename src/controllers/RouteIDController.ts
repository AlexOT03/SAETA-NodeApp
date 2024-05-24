import {data} from "../config/RutasTab"
import { Request, Response,} from "express"


export const RouteIDController = async(req:Request, res:Response, next:any)=>{
try {
    const {id} = req.params
    const route = data.routes.find((route:any)=>route.id == id)
    if(route){
        res.json(route)
    }else{
        next("Route not found")
    }
} catch (error:any) {
    next(error.message)
}
}