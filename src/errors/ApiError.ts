export default class ApiError extends Error {
    constructor(public status: number, public message: string) {
        super(message);
    }

    static BadRequest(message: string) {
        return new ApiError(400, message);
    }

    static Forbidden(message: string) {
        return new ApiError(403, message);
    }

    static NotFound(message: string) {
        return new ApiError(404, message);
    }

    static Conflict(message: string) {
        return new ApiError(409, message);
    }

}