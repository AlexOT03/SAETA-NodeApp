import {data} from "../config/RutasTab"
import { Request, Response,} from "express"

export const RuotesController = async(req:Request, res:Response, next:any)=>{
try {
    res.json(data.routes)
} catch (error:any) {
    next(error.message)
}
}