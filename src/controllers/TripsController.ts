import {data} from "../config/RutasTab"
import { Request, Response,} from "express"

export const TripsController = async(req:Request, res:Response, next:any)=>{
try {
    const {id} = req.params
    const trip = data.trips.find((trip:any)=>trip.id == id)
    if(trip){
        res.json(trip)
    }else{
        next("Trip not found")
    }
} catch (error:any) {
    next(error.message)
}
}