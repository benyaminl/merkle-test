import { Guestbook } from "../models/guestbook";

import express, {Request, Response} from 'express';
import { APIResponse } from "../response/api-response";
import { GuestInsertRequest } from "../requests/guest-input";

const router = express.Router();
export let guestbook = router;

router.get('/', async (req: Request, res: Response) => {
    let data = await Guestbook.findAll({
        attributes: ["id", "name", "note", "createdAt", "updatedAt"]
    });

    res.send(data);
});

router.post('/', (req: Request, res: Response) => {
    let body = <GuestInsertRequest> req.body;
    
    let newNote = Guestbook.build({
        name: body.name,
        address: body.addr,
        note: body.note,
        phone: body.phone
    });

    newNote.save();

    res.send(new APIResponse("Success add new guestbook note from : " + body.name));
});

router.delete("/:id", async (req: Request, res: Response) => {
    let id = req.params.id;
    let task = await Guestbook.destroy({
        where: {
            id: id
        }
    });
    
    if (task > 0)
    {
        res.send(new APIResponse("Success delete task"));   
        return;
    }

    // failed
    res.statusCode = 400;
    res.send(new APIResponse("failed delete task", false));   

});