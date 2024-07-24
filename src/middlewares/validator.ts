import {check, validationResult} from 'express-validator';
import {NOT_EMPTY, REQUIRED, TYPE} from "../constants/validators-messages";

export const validateCreatePostDto = [
    check('title')
        .exists()
        .withMessage(REQUIRED)
        .bail()
        .isString()
        .withMessage(TYPE)
        .bail()
        .notEmpty()
        .withMessage(NOT_EMPTY),
    check('content')
        .exists()
        .withMessage(REQUIRED)
        .bail()
        .isString()
        .withMessage(TYPE)
        .bail()
        .notEmpty()
        .withMessage(NOT_EMPTY),
];

export const validateUpdatePostDto = [
    check('title')
        .optional()
        .isString()
        .withMessage(TYPE)
        .bail()
        .notEmpty()
        .withMessage(NOT_EMPTY),
    check('content')
        .optional()
        .isString()
        .withMessage(TYPE)
        .bail()
        .notEmpty()
        .withMessage(NOT_EMPTY),

];

export const validateCreateCommentaryDto = [
    check('content')
        .optional()
        .isString()
        .withMessage(TYPE)
        .bail()
        .notEmpty()
        .withMessage(NOT_EMPTY),
];

export const validatePath = [
    check('id')
        .exists()
        .withMessage(REQUIRED)
        .bail()
        .isInt()
        .withMessage(TYPE)
];

