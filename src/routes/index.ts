/**
 * Root router
 * redirections to Routers
 */

import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import { LogInfo } from "@/utils/logger";


//Server intance 
let server = express();

//Router intance
let rootRouter = express.Router();

//Activate for requests to http://localhost:8000/api

rootRouter.get('/', (req: Request, res:Response) => {
    LogInfo('GET: http://localhost:8000/api/')
    res.send('welcolme to de rootrouter');
});

//redirection to Routers & Controllers (Relevance)

server.use('/', rootRouter); //http://localhost:8000/api/
server.use('/hello', helloRouter); //http://localhost:8000/api/hello ---> helloRouter
//add more routes to the app

export default server;