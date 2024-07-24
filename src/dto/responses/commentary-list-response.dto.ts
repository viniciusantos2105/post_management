import {LinkDto} from "./link-response.dto";

export default interface CommentaryListResponseDto {
    id: number;
    content: string;
    createdAt: string;
    links: LinkDto[];
}