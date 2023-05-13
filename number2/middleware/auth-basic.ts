import { Request, Response, NextFunction } from "express";

export const AuthBasic = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers.authorization);
}