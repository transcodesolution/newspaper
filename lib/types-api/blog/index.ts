import { IBlog } from "@/lib/types/blog";

export interface IGetBlogsParams {
    offset: number;
    number: number;
}

export interface IGetBlogsResponse {
    data: IBlog[];
    count: number;
}