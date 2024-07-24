import buildError, { CommonError } from './base-error';
import {
  RESOURCE_VALIDATION,
} from '../constants/error-messages';

export interface ValidationErrorDetail {
  campo: string;
  regra: string;
  valor?: any;
}

export enum ValidationErrorCodes {
  BAD_REQUEST = 400,
}

export const buildValidationError = (
    message: string,
    details: ValidationErrorDetail[],
    previous?: Error,
): CommonError<ValidationErrorDetail> =>
    buildError('ValidationError', message, ValidationErrorCodes.BAD_REQUEST, details, previous);

export const requestValidationError = (
    details: ValidationErrorDetail[],
    previous?: Error,
): CommonError<ValidationErrorDetail> =>
    buildValidationError(
        RESOURCE_VALIDATION,
        details,
        previous,
    );
