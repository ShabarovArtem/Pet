import {ErrorRequestHandler} from "express";
import ApiError from "../errors/ApiError";

export const ErrorHandling: ErrorRequestHandler = (err, req, res, next): void => {
    if (err instanceof ApiError) {
        res.status(err.status).json({message: err.message});
        return;
    }
    console.error(err);
    res.status(500).json({message: "Internal server error"});
}