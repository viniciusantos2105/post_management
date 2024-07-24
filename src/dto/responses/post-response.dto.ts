import {LinkDto} from "./link-response.dto";

export default interface PostResponseDto {
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    links: LinkDto[];
}