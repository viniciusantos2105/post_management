import {PostRepositoryInterface} from "./post-repository-interface";
import Post from "../models/post.model";
import {WhereOptions} from "sequelize";
import PostRequestDto from "../dto/requests/post-request.dto";
import {notFoundError} from "../erros/resource-error";

export class PostRepository implements PostRepositoryInterface {
    public async findAll(): Promise<Post[]> {
        return Post.findAll({});
    }

    public async findById(id: number): Promise<Post | null> {
        const post = await Post.findOne({ where: { id } });
        if (!post) {
            throw notFoundError([{ recurso: 'Post', campo: 'id', valor: id }]);
        }
        return post;
    }

    public async create(data: PostRequestDto): Promise<Post> {
        return await Post.create({
            title: data.title,
            content: data.content,
        });
    }

    public async update(postId: number, data: PostRequestDto): Promise<Post> {
        const post = await this.findById(postId);
        if (!post) {
            throw notFoundError([{ recurso: 'Post', campo: 'id', valor: postId }]);
        }
        return post.update(data);
    }

    public async delete(id: number): Promise<void> {
        const post = await Post.findOne({ where: { id } });
        if (!post) {
            throw notFoundError([{ recurso: 'Post', campo: 'id', valor: id }]);
        }
        await post.destroy();
    }

}