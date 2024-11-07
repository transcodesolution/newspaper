import { IGetBlogBySlugParams, IGetBlogBySlugResponse } from "@/lib/types-api/blog";
import axiosInstance from "../http-common";

export const getBlogBySlug = async (params: IGetBlogBySlugParams): Promise<IGetBlogBySlugResponse> => {
    try {
        const response = await axiosInstance.get<IGetBlogBySlugResponse>('/')
        return response.data;
    }
    catch (error) {
        throw new Error('error while fetching Blog by slug')
    }
}