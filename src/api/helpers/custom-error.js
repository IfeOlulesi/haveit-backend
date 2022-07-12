export class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

export const customError = (message,status) => {
    return new CustomAPIError(message,status)
}