import {PostService} from "./post-service";
import {CommentaryService} from "./commentary-service";
import {providePostRepository, provideCommentRepository} from "../repositories/provider/repository-provider";

const postRepository = providePostRepository();
const postService = new PostService(postRepository);

const commentRepository = provideCommentRepository();
const commentService = new CommentaryService(commentRepository, postService);

export {postService, commentService};