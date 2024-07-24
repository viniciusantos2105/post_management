import {NextFunction, Request, Response} from 'express';
import HTTP from '../constants/http';
import {ValidationErrorCodes} from '../erros/validation-error';
import handler from "../erros/handler";
import {ResourceErrorCodes} from "../erros/resource-error";
import {CommonError} from "../erros/base-error";
import parseJsonError from "../utils/parse-json-error";

const httpStatusMap = (err: CommonError) =>
    ({
        [ResourceErrorCodes.NOT_FOUND]: HTTP.NOT_FOUND,
        [ValidationErrorCodes.BAD_REQUEST]: HTTP.BAD_REQUEST,
    }[err.code] || HTTP.INTERNAL_SERVER_ERROR);


export default (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    err = handler(err);

    res.status(httpStatusMap(err)).json(parseJsonError(err));
};
