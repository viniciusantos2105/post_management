import {CommentaryRepositoryInterface} from "./commentary-repository-interface";
import Commentary from '../models/commentary.model';
import {notFoundError} from "../erros/resource-error";
import CommentaryRequestDto from "../dto/requests/commentary-request.dto";
import Post from "../models/post.model";

export class CommentaryRepository implements CommentaryRepositoryInterface {

    public async findAll(postId:number): Promise<Commentary[]> {
        return Commentary.findAll({
            where: {
                post_id: postId
            }
        });
    }

    public async create(postId:number, data: CommentaryRequestDto): Promise<Commentary> {
        return await Commentary.create({
            content: data.content,
            post_id: postId,
        });
    }

    public async delete(postId: number, commentaryId:number): Promise<void> {
        const commentary = await Commentary.findOne({ where: { id: commentaryId, post_id: postId } });
        if (!commentary) {
            throw notFoundError([{ recurso: 'Commentary', campo: 'id', valor: commentaryId }]);
        }
        await commentary.destroy();
    }
}