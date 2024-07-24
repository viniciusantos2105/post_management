import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";
import {requestValidationError, ValidationErrorCodes} from "../erros/validation-error";
import parseJsonError from "../utils/parse-json-error";

export const validationError = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const validationErrors = errors.array().map((error: any) => ({ // use 'any' type for 'error'
            campo: error.path,
            regra: error.msg,
            valor: error.value
        }));
        const validationError = requestValidationError(validationErrors);
        return res.status(ValidationErrorCodes.BAD_REQUEST).json(parseJsonError(validationError));
    }
    next();
}