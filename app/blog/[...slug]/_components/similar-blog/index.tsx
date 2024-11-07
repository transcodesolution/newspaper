import { blogData } from '@/app/blogs/[...category]/page'
import BlogCard from '@/lib/components/custom/blog-card';
import Stick from '@/lib/components/custom/stick';
import Heading from '@/lib/components/ui/heading';
import Link from 'next/link';
import React from 'react'

interface ISimilarBlogs {
    keywords?: string[]
}
export default async function SimilarBlogs({ keywords = [] }: ISimilarBlogs) {
    //write logic to fetch the similar blogs either basis on keywords , will make it more general like using the category or what so ever but for now use keywords
    // const blogs = await getSimilarBlogs({ keywords })
    const blogs = blogData.slice(0, 2);

    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <Heading order={2}>You May Also Like</Heading>
                    <Stick width={112} height={4} />
                </div>
                <Link href='/blogs' className='font-semibold underline'>View All</Link>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8'>
                {
                    blogs.map((blog) => <BlogCard blog={{ ...blog }} key={blog.slug} />)
                }
            </div>
        </section>
    )
}
