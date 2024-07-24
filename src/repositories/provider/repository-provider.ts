import { PostRepositoryInterface } from '../post-repository-interface';
import { CommentaryRepositoryInterface } from '../commentary-repository-interface';
import {PostRepository} from '../post-repository';
import {CommentaryRepository} from "../commentary-repository";

export function providePostRepository(): PostRepositoryInterface {
    return new PostRepository();
}

export function provideCommentRepository(): CommentaryRepositoryInterface {
    return new CommentaryRepository();
}