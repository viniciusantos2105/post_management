import {PostRepositoryInterface} from "../repositories/post-repository-interface";
import PostRequestDto from "../dto/requests/post-request.dto";
import PostCreatedResponseDto from "../dto/responses/post-created-response.dto";
import {adaptPostToCreatedResponse, adaptPostToListResponse, adaptPostToResponse} from "../adapters/post-adapter";
import PostListResponseDto from "../dto/responses/post-list-response.dto";
import PostResponseDto from "../dto/responses/post-response.dto";

export class PostService{

    private repository: PostRepositoryInterface;

    constructor(repository: PostRepositoryInterface) {
        this.repository = repository;
    }

    public async findAllPosts(): Promise<PostListResponseDto[]> {
        const posts = await this.repository.findAll();
        return adaptPostToListResponse(posts);
    }

    public async findPostById(id: number): Promise<PostResponseDto | null> {
        const post = await this.repository.findById(id);
        return post ? adaptPostToResponse(post) : null;
    }

    public async createPost(post: PostRequestDto): Promise<PostCreatedResponseDto> {
        const response = await this.repository.create(post);
        return adaptPostToCreatedResponse(response);
    }

    public async updatePost(id: number, post: PostRequestDto): Promise<PostResponseDto | null> {
        let existingPost = await this.repository.findById(id);
        if (existingPost) {
            await existingPost.update(post);
            existingPost = await this.repository.findById(id);
        }
        return existingPost ? adaptPostToResponse(existingPost) : null;
    }

    public async deletePost(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}