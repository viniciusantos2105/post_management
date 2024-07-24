import buildError, { CommonError } from './base-error';
import {
    RESOURCE_NOT_FOUND,
} from '../constants/error-messages';

interface ResourceErrorDetail {
    recurso: string;
    campo?: string;
    valor?: string | number | boolean;
}

export enum ResourceErrorCodes {
    NOT_FOUND = 404,
}

export const buildResourceError = (
    message: string,
    code: ResourceErrorCodes,
    details?: ResourceErrorDetail[],
    previous?: Error,
): CommonError<ResourceErrorDetail> => {
    return buildError(
        'ResourceError',
        message,
        code.valueOf(),
        details,
        previous,
    );
};

export const notFoundError = (
    details?: ResourceErrorDetail[],
    previous?: Error,
): CommonError<ResourceErrorDetail> => {
    return buildResourceError(
        RESOURCE_NOT_FOUND,
        ResourceErrorCodes.NOT_FOUND,
        details,
        previous,
    );
};
