import express from "express";
import {ErrorHandling} from "./middlewares/ErrorHandling";
import {Logger} from "./middlewares/Logger";
import {apiRouter} from "./api/routes";

export default async function createApp() {
    const app = express();

    app.use(express.json());
    app.use(Logger)
    app.use('/', apiRouter);
    app.use(ErrorHandling);

    return app;
}