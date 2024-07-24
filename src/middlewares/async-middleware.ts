import { Request, Response, NextFunction } from 'express';

export default function asyncMiddleware(fn: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>) {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}