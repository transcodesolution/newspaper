import { IGetSimilarBlogsParams, IGetSimilarBlogsResponse } from "@/lib/types-api/blog";
import axiosInstance from "../http-common";

export const getSimilarBlogs = async (params: IGetSimilarBlogsParams): Promise<IGetSimilarBlogsResponse> => {
    try {
        const response = await axiosInstance.get<IGetSimilarBlogsResponse>('/')
        return response.data;
    }
    catch (error) {
        throw new Error('error while fetching similar blogs')
    }
}