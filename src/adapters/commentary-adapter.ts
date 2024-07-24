import Commentary from '../models/commentary.model';
import CommentaryListResponseDto from '../dto/responses/commentary-list-response.dto';
import CommentaryCreatedResponseDto from '../dto/responses/commentary-created-response.dto';
import {formatDate} from "../utils/dataFormatter";


export function adaptCommentaryToListResponse(commentaries: Commentary[]): CommentaryListResponseDto[] {
    return commentaries.map(commentary => ({
        id: commentary.id,
        content: commentary.content,
        createdAt: formatDate(commentary.createdAt),
    }));
}

export function adaptCommentaryToCreatedResponse(commentary: Commentary): CommentaryCreatedResponseDto {
    return {
        id: commentary.id,
        content: commentary.content
    }
}