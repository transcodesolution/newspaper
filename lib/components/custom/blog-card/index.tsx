import { IBlog } from '@/lib/types/blog'
import Image from 'next/image'
import React from 'react'

interface IBlogCard {
    blog: IBlog;
}
export default function BlogCard({ blog }: IBlogCard) {
    const { image, imageAlt = '', keywords, creationDate, description, title } = blog;
    return (
        <div>
            <div>
                <Image src={image} width={424} height={332} alt={imageAlt} />
            </div>
            <div>
                <div>
                    {keywords.map((keyword) => keyword)}
                </div>
                <h2>{title}</h2>
                <p>{creationDate}</p>
                
            </div>
        </div>
    )
}
