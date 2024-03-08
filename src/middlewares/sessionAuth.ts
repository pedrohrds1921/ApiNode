import { Request, Response,NextFunction } from "express";

export function sessionAuth(req:Request,res:Response,next:NextFunction){

    if(!req.session || req.session.userId===undefined){

        return res.status(401).json({message:"unauthorized"})
    }
    next()

}