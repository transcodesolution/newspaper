import { IBlog } from '@/lib/types/blog'
import { dateFormat } from '@/lib/utils/date-formate';
import Image from 'next/image'
import React from 'react'
import Stick from '../stick';
import Heading from '../../ui/heading';
import Link from 'next/link';
import LineIcon from '@/lib/icons/line.svg'
import styles from './styles.module.scss'
import { cn } from '@/lib/utils/cn';
interface IBlogCard {
    blog: IBlog;
}
export default function BlogCard({ blog }: IBlogCard) {
    const { image, imageAlt = '', keywords, creationDate, description, title, slug } = blog;
    return (
        <div className='flex flex-col'>
            <Image src={image} width={424} height={332} alt={imageAlt} className='w-full' />
            <div className={cn('border-light-border border px-4 py-6 pt-0 flex flex-col justify-between gap-4 relative flex-1', styles.blogCardBody)}>
                <div className={cn('flex gap-2 items-center capitalize absolute bottom-full bg-primary w-full p-4',styles.blogCardKeywords)}>
                    <Stick width={24} height={2} />{keywords.map((keyword, index) => `${keyword}${index !== keywords.length - 1 && ', '}`)}
                </div>
                <div className='flex flex-col gap-1'>
                    <Heading order={2}>{title}</Heading>
                    <p className='text-light-text'>{dateFormat(creationDate)}</p>
                </div>
                <Link href={`/blog/${slug}`} className='font-semibold flex gap-2 items-center'>Read Article <LineIcon /></Link>
            </div>
        </div>
    )
}
