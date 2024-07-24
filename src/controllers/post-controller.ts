import {Request, Response} from 'express';
import {postService} from "../services/services";
import PostRequestDto from "../dto/requests/post-request.dto";
import http from "../constants/http";


export const findAllPosts = async (req: Request, res: Response) => {
    const posts = await postService.findAllPosts();
    return res.status(http.OK).json(posts);
}

export const findPostById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = await postService.findPostById(Number(id));
    return res.status(http.OK).json(post);
}

export const createPost = async (req: Request, res: Response) => {
    const post = req.body as PostRequestDto;
    const createdPost = await postService.createPost(post);
    return res.status(http.CREATED).json(createdPost);
}

export const updatePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = req.body as PostRequestDto;
    const createdPost = await postService.updatePost(Number(id), post);
    return res.status(http.CREATED).json(createdPost);
}

export const deletePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    await postService.deletePost(Number(id));
    return res.status(http.NO_CONTENT).send();
}
