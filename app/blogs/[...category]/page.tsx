import BlogCard from '@/lib/components/custom/blog-card'
import PageTitle from '@/lib/components/custom/page-title';
import { IBlog } from '@/lib/types/blog'
import React from 'react'
import ClientSideBlogs from './_components/client-side-blogs';

export const blogData: IBlog[] = [
    {
        creationDate: new Date('2023-01-01').toString(),
        description: 'An in-depth look at the latest trends in technology.',
        image: '/assets/blog-images/blog1.jpg',
        keywords: ['technology', 'trends', 'innovation'],
        title: 'Tech Trends 2023',
        imageAlt: 'A futuristic cityscape representing technology trends',
        slug: 'blog-of-the-day'
    },
    {
        creationDate: new Date('2023-02-15').toString(),
        description: 'Exploring the benefits of a healthy lifestyle.',
        image: '/assets/blog-images/blog1.jpg',
        keywords: ['health', 'wellness', 'lifestyle'],
        title: 'The Benefits of a Healthy Lifestyle',
        imageAlt: 'A person jogging in a park',
        slug: 'blog-of-the-day'
    },
    {
        creationDate: new Date('2023-03-10').toString(),
        description: 'A guide to sustainable living and eco-friendly practices.',
        image: '/assets/blog-images/blog1.jpg',
        keywords: ['sustainability', 'eco-friendly', 'green living'],
        title: 'Sustainable Living: A Guide',
        imageAlt: 'A green forest representing sustainable living',
        slug: 'blog-of-the-day'
    },
    {
        creationDate: new Date('2023-04-05').toString(),
        description: 'Understanding the basics of personal finance management.',
        image: '/assets/blog-images/blog1.jpg',
        keywords: ['finance', 'money management', 'budgeting'],
        title: 'Personal Finance 101',
        imageAlt: 'A calculator and financial documents',
        slug: 'blog-of-the-day'
    },
    {
        creationDate: new Date('2023-05-20').toString(),
        description: 'Tips and tricks for effective remote work.',
        image: '/assets/blog-images/blog1.jpg',
        keywords: ['remote work', 'productivity', 'work from home'],
        title: 'Mastering Remote Work',
        imageAlt: 'A home office setup for remote work',
        slug: 'blog-of-the-day'
    }
];
const getBlogs = async (): Promise<IBlog[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([blogData[0]])
        }, 1000);
    })
}
export default async function BlogsPage() {
    const blogs = await getBlogs();
    console.log(blogs, 'response');
    return (
        <section className="py-16 px-8">
            <div className='container mx-auto'>
                <PageTitle>Latest News</PageTitle>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-12'>
                    {
                        blogs.map((blog) => <BlogCard blog={blog} key={blog.title} />)
                    }
                    <ClientSideBlogs serverSideLoadBlogCount={blogs.length} />
                </div>
            </div>
        </section>
    )
}
