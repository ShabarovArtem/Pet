import {Router} from "express";
import {router as petRouter} from "./pet/pet.router";

const apiRouter = Router();

apiRouter.use('/pet', petRouter);

export {apiRouter};