import { Guestbook } from "../models/guestbook";

import express, {Request, Response} from 'express';
import { APIResponse } from "../response/api-response";
import { GuestInsertRequest } from "../requests/guest-input";

const router = express.Router();
export let admin = router;


admin.get("/")