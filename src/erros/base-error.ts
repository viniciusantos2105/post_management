export interface CommonError<DetailFormat = {}> extends Error {
    isOperational: boolean;
    code: number;
    previous?: Error;
    details?: DetailFormat[];
}

export default function <DetailFormat = {}>(
    name: string,
    message: string,
    code: number,
    details?: DetailFormat[],
    previous?: Error,
): CommonError<DetailFormat> {
    return {
        code,
        message,
        name,
        details,
        previous,
        isOperational: true,
    };
}