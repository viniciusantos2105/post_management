import {Router} from "express";
import {validateCreatePostDto, validatePath, validateUpdatePostDto} from "../middlewares/validator";
import * as postController from "../controllers/post-controller";
import {validationError} from "../middlewares/validation-handler";
import asyncMiddleware from "../middlewares/async-middleware";

const postRoute = Router();
postRoute.get('/', asyncMiddleware(postController.findAllPosts));
postRoute.get('/:id', validatePath, validationError, asyncMiddleware(postController.findPostById));
postRoute.post('/', validateCreatePostDto, validationError, asyncMiddleware(postController.createPost));
postRoute.put('/:id', validatePath, validateUpdatePostDto, validationError, asyncMiddleware(postController.updatePost));
postRoute.delete('/:id', validatePath, validationError, asyncMiddleware(postController.deletePost));

export default postRoute;