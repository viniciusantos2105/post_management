import Post from "../models/post.model";
import PostCreatedResponseDto from "../dto/responses/post-created-response.dto";
import {formatDate} from "../utils/dataFormatter";
import PostListResponseDto from "../dto/responses/post-list-response.dto";
import PostResponseDto from "../dto/responses/post-response.dto";

export function adaptPostToListResponse(posts: Post[]): PostListResponseDto[] {
    return posts.map(post => ({
        id: post.id,
        title: post.title,
        content: post.content,
    }));
}
export function adaptPostToCreatedResponse(post: Post): PostCreatedResponseDto {
    return {
        id: post.id,
        title: post.title,
        content: post.content,
        createdAt: formatDate(post.createdAt)
    }
}

export function adaptPostToResponse(post: Post): PostResponseDto {
    return {
        title: post.title,
        content: post.content,
        createdAt: formatDate(post.createdAt),
        updatedAt: formatDate(post.updatedAt)
    }
}