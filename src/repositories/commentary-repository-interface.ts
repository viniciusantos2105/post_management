import Commentary from "../models/commentary.model";
import CommentaryRequestDto from "../dto/requests/commentary-request.dto";
import Post from "../models/post.model";

export interface CommentaryRepositoryInterface {
    create(postId:number | null, data: CommentaryRequestDto): Promise<Commentary>;

    findAll(
        postId:number
    ): Promise<Commentary[]>;

    delete(postId: number, commentaryI:number): Promise<void>;

}