import {LinkDto} from "./link-response.dto";

export default interface CommentaryCreatedResponseDto {
    id: number;
    content: string;
    links: LinkDto[];
}