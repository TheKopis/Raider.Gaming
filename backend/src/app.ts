import express from "express";
import cors from 'cors'
import { Request, Response } from "express";
import getRaiderIOProfile from "./fetch";


const app = express();
app.use(cors())
app.get('/', (req: Request, res: Response) => {
    try {
        getRaiderIOProfile(req.query.realm as string, req.query.charname as string).then((json) => {
            if (!json) {
                return res.sendStatus(500);
            }
            res.json(json);
        })
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
})
app.listen(8080, () => {
    console.log(`server up on http://localhost:8080`)
})
