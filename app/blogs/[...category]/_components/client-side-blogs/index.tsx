'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { IBlog } from '@/lib/types/blog';
import BlogCard from '@/lib/components/custom/blog-card';
import Button, { ButtonVariant } from '@/lib/components/ui/button';
import { blogData } from '../../page';

interface IClientSideBlogs {
    serverSideLoadBlogCount: number;
}

export default function ClientSideBlogs({ serverSideLoadBlogCount }: IClientSideBlogs) {
    const searchParams = useSearchParams();
    const count = Number(searchParams.get('count')) || serverSideLoadBlogCount;
    const [blogs, setBlogs] = useState<IBlog[]>([]);

    useEffect(() => {
        if (count > serverSideLoadBlogCount) {
            //here we need to call api to fetch the blogs
            const additionalBlogs = blogData.slice(serverSideLoadBlogCount, count); // Load all blogs up to the count
            setBlogs(additionalBlogs);
        }
    }, [count, serverSideLoadBlogCount]);

    const handleLoadMore = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const currentCount = parseInt(searchParams.get('count') || serverSideLoadBlogCount.toString(), 10);
        const newCount = currentCount + 1;
        searchParams.set('count', newCount.toString());

        // Use the history API to replace the current state
        window.history.replaceState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
    };


    return (
        <>
            {blogs.map((blog) => (
                <BlogCard blog={blog} key={blog.title} />
            ))}
            <div className='col-span-1 md:col-span-2 xl:col-span-3 text-center'>
                <Button
                    variant={ButtonVariant.dark}
                    className='text-xl font-bold px-8'
                    onClick={handleLoadMore}
                >
                    Load More
                </Button>
            </div>
        </>
    );
}