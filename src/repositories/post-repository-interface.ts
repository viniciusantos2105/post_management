import {WhereOptions} from "sequelize";
import Post from "../models/post.model";
import PostRequestDto from "../dto/requests/post-request.dto";

export interface PostRepositoryInterface{
    create(data: PostRequestDto): Promise<Post>;
    findAll(): Promise<Post[]>;
    findById(id: number): Promise<Post | null>;
    delete(id: number): Promise<void>;
    update(postId:number, data: Post): Promise<Post>;
}