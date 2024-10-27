import { IGetBlogsResponse } from "@/lib/types-api/blog";
import axiosInstance from "../http-common";

export const getBlogs = async (): Promise<IGetBlogsResponse> => {
    try {
        const response = await axiosInstance.get<IGetBlogsResponse>('/')
        return response.data;
    }
    catch (error) {
        throw new Error('error while fetching blogs')
    }
}