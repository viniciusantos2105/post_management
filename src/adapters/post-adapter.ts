// src/adapters/post-adapter.ts
import Post from '../models/post.model';
import PostCreatedResponseDto from '../dto/responses/post-created-response.dto';
import PostListResponseDto from '../dto/responses/post-list-response.dto';
import PostResponseDto from '../dto/responses/post-response.dto';
import {formatDate} from "../utils/dataFormatter";

export function adaptPostToListResponse(posts: Post[]): PostListResponseDto[] {
    return posts.map(post => ({
        id: post.id,
        title: post.title,
        content: post.content,
        createdAt: formatDate(post.createdAt),
        links: [
            { rel: 'self', method: 'GET', href: `/api/posts/${post.id}` },
            { rel: 'update', method: 'PUT', href: `/api/posts/${post.id}` },
            { rel: 'delete', method: 'DELETE', href: `/api/posts/${post.id}` }
        ]
    }));
}

export function adaptPostToCreatedResponse(post: Post): PostCreatedResponseDto {
    return {
        id: post.id,
        title: post.title,
        content: post.content,
        createdAt: formatDate(post.createdAt),
        links: [
            { rel: 'list', method: 'GET', href: `/api/posts/`},
            { rel: 'self', method: 'GET', href: `/api/posts/${post.id}` },
            { rel: 'update', method: 'PUT', href: `/api/posts/${post.id}` },
            { rel: 'delete', method: 'DELETE', href: `/api/posts/${post.id}` }
        ]
    }
}

export function adaptPostToResponse(post: Post): PostResponseDto {
    return {
        title: post.title,
        content: post.content,
        createdAt: formatDate(post.createdAt),
        updatedAt: formatDate(post.updatedAt),
        links: [
            { rel: 'self', method: 'GET', href: `/api/posts/${post.id}` },
            { rel: 'update', method: 'PUT', href: `/api/posts/${post.id}` },
            { rel: 'delete', method: 'DELETE', href: `/api/posts/${post.id}` }
        ]
    }
}