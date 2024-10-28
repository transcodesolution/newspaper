import BlogCardLoader from '@/lib/components/custom/loaders/blog-card-loader'
import React from 'react'

export default function Loading() {
  return (
    <section className="py-16 px-8 h-full">
      <div className='container mx-auto flex justify-center h-full items-center'>
        <BlogCardLoader />
      </div>
    </section>
  )
}
