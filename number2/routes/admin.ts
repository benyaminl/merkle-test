
import express, {Request, Response} from 'express';
import { APIResponse } from "../response/api-response";
import { AdminLoginRequest } from '../requests/admin-login';
import { User } from '../models/user';
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import { Guestbook } from '../models/guestbook';

const router = express.Router();
export let admin = router;


admin.post("/auth", async (req: Request, res: Response) => {
    let body = <AdminLoginRequest>req.body;

    let data = await User.findOne({
        where: {
            username: body.user
        }
    });

    if (data == null)
    {
        res.statusCode = 404;
        res.send(new APIResponse("User or pass wrong!", false));
        return;
    }
    
    let check = await bcrypt.compare(body.pass, data.password);
    if (check)
    {
        let response = jwt.sign({user: "admin", role: "admin"}, "abc", {
            algorithm: "HS256",
            expiresIn: "2h",
            audience: "admin"
        });

        res.send(new APIResponse("Success", true, {
            "jwt" : response
        }));
    }
});

admin.get("/guest", async (req: Request, res: Response) => {
    let data = await Guestbook.findAll();

    res.send(new APIResponse("Success", true, {
        data: data
    }));
});

admin.delete("/guest/:id", async (req: Request, res: Response) => {
    let id = req.params.id;
    let task = await Guestbook.destroy({
        where: {
            id: id
        }
    });
    
    if (task > 0)
    {
        res.send(new APIResponse("Success delete guest"));   
        return;
    }

    // failed
    res.statusCode = 400;
    res.send(new APIResponse("failed delete guest", false));   
});