import { IBlog } from "@/lib/types/blog";

export interface IGetBlogsParams {
    offset: number;
    number: number;
}

export interface IGetBlogsResponse {
    data: IBlog[];
    count: number;
}
export interface IGetBlogBySlugParams {
    slug: string
}

export interface IGetBlogBySlugResponse {
    data: IBlog;
}
export interface IGetSimilarBlogsParams {
    keywords: string[]
}

export interface IGetSimilarBlogsResponse {
    data: IBlog[];
    count: number
}