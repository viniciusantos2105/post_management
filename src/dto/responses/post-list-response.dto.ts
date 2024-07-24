import {LinkDto} from "./link-response.dto";

export default interface PostListResponseDto {
    id: number;
    title: string;
    content: string;
    links: LinkDto[];
}