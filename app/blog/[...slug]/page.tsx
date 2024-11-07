import { blogData } from '@/app/blogs/[...category]/page'
import Heading from '@/lib/components/ui/heading';
import { dateFormat } from '@/lib/utils/date-formate';
import { getBlogBySlug } from '@/lib/web-api/blog/get-blog-by-slug'
import Image from 'next/image';
import React, { ReactNode } from 'react'
import FacebookIcon from '@/lib/icons/facebook.svg'
import XIcon from '@/lib/icons/x.svg'
import PintrestIcon from '@/lib/icons/pintrest.svg'
import PinIcon from '@/lib/icons/pin.svg'
import SimilarBlogs from './_components/similar-blog';

export default async function BlogDetailPage({ params }: { params: { slug: string[] } }) {
  // const blog = await getBlogBySlug({ slug: params.slug[0] })
  const { creationDate, description, image, keywords, slug, title, imageAlt = '' } = blogData[0];

  return (
    <section className='py-16 px-8'>
      <article className='container container-md mx-auto'>
        <Heading order={1} className='mb-4'>{title}</Heading>
        <p className='mb-6 text-light-text'>{dateFormat(creationDate)}</p>
        <Image src={image} alt={imageAlt || ''} className='mb-4' width={873} height={527} />
        <div className='flex gap-4'>
          <SociamMediaLinkIcon svg={<FacebookIcon />} />
          <SociamMediaLinkIcon svg={<XIcon />} />
          <SociamMediaLinkIcon svg={<PintrestIcon />} />
          <SociamMediaLinkIcon svg={<PinIcon />} />
        </div>

        {/* now main content of the blog is starting */}
        <div className='py-12'>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>

        <SimilarBlogs />
      </article>
    </section>
  )
}

const SociamMediaLinkIcon = ({ svg }: { svg: ReactNode }) => {
  return <div className='w-12 h-12 bg-gray-100 flex justify-center items-center rounded-full'>{svg}</div>
}
