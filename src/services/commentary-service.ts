import {CommentaryRepositoryInterface} from "../repositories/commentary-repository-interface";
import {provideCommentRepository} from "../repositories/provider/repository-provider";
import CommentaryRequestDto from "../dto/requests/commentary-request.dto";
import {adaptCommentaryToCreatedResponse, adaptCommentaryToListResponse,} from "../adapters/commentary-adapter";
import CommentaryListResponseDto from "../dto/responses/commentary-list-response.dto";
import CommentaryCreatedResponseDto from "../dto/responses/commentary-created-response.dto";
import {PostService} from "./post-service";

export class CommentaryService {
    private repository: CommentaryRepositoryInterface;
    private postService: PostService;
    constructor(repository: CommentaryRepositoryInterface, postService: PostService) {
        this.repository = provideCommentRepository();
        this.postService = postService;
    }

    public async findAllCommentsByPost(postId: number): Promise<CommentaryListResponseDto[]> {
        await this.postService.findPostById(postId);
        const commentaries =  await this.repository.findAll(postId);
        return adaptCommentaryToListResponse(commentaries);
    }


    public async createComment(postId: number, commentary: CommentaryRequestDto): Promise<CommentaryCreatedResponseDto> {
        await this.postService.findPostById(postId);
        const response = await this.repository.create(postId, commentary);
        return adaptCommentaryToCreatedResponse(response);
    }


    public async deleteComment(postId: number, commentaryId: number): Promise<void> {
        await this.postService.findPostById(postId);
        await this.repository.delete(postId, commentaryId);
    }
}