class APIError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

class NotFoundError extends APIError {
    constructor(message = 'Not Found Error') {
        super(404, message);
    }
}

class BadRequestError extends APIError {
    constructor(message = 'Bad Request') {
        super(400, message);
    }
}

class InternalServerError extends APIError {
    constructor(message = 'Interanl Server Error') {
        super(500, message);
    }
}

module.exports = { NotFoundError, BadRequestError, InternalServerError };
