import {commentService} from "../services/services";
import {Request, Response} from 'express';
import http from "../constants/http";
import CommentaryRequestDto from "../dto/requests/commentary-request.dto";
export const findAll = async (req: Request, res: Response) => {
    const postId = req.params.postId;
    const comments = await commentService.findAllCommentsByPost(Number(postId));
    return res.status(http.OK).json(comments);
}

export const createCommentary = async (req: Request, res: Response) => {
    const postId = req.params.postId;
    const comment = req.body as CommentaryRequestDto;
    const createdComment = await commentService.createComment(Number(postId), comment);
    return res.status(http.CREATED).json(createdComment);
}


export const deleteCommentary = async (req: Request, res: Response) => {
    const postId = req.params.postId;
    const commentaryId = req.params.commentaryId;
    await commentService.deleteComment(Number(postId), Number(commentaryId));
    return res.status(http.NO_CONTENT).send();
}