import {LinkDto} from "./link-response.dto";

export default interface PostCreatedResponseDto {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    links: LinkDto[];
}