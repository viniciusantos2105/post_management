import buildError, { CommonError } from './base-error';


const isKnownError = (err: any): err is CommonError => {
  return err !== null && err !== undefined && err.isOperational;
};

const convertUnhandledError = (err: any): CommonError =>
    buildError(
        'UnexpectedError',
        'Um erro não esperado ocorreu',
        0,
        undefined,
        err,
    );

export default function (err: any): CommonError {
  if (!isKnownError(err)) {
    err = convertUnhandledError(err);
  }
  return err;
}
