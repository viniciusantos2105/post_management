import {Router} from "express";
import * as commentController from "../controllers/commentary-controller";
import {validateCreateCommentaryDto} from "../middlewares/validator";
import asyncMiddleware from "../middlewares/async-middleware";
const commentaryRoute = Router({mergeParams: true});

commentaryRoute.get('/', asyncMiddleware(commentController.findAll));
commentaryRoute.post('/', validateCreateCommentaryDto, asyncMiddleware(commentController.createCommentary));
commentaryRoute.delete('/:commentaryId', asyncMiddleware(commentController.deleteCommentary));

export default commentaryRoute;