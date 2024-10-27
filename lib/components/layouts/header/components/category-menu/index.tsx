'use client'
import React, { useState } from 'react';
import Hambergur from '@/lib/icons/hambergure.svg';
import Cross from '@/lib/icons/cross.svg';
import Heading from '@/lib/components/ui/heading';
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';

const categories = [
    { label: 'India', value: 'india' },
    { label: 'Business', value: 'business' },
    { label: 'Politics', value: 'politics' },
    { label: 'Sports', value: 'sports' },
    { label: 'Technology', value: 'technology' },
    { label: 'Startups', value: 'startups' },
];

export default function CategoryMenu() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);

    return (
        <div>
            <span onClick={toggleDrawer} className='cursor-pointer'><Hambergur /></span>
            <div className={cn(
                'fixed top-0 left-0 h-full bg-secondary w-2/3 lg:w-1/3 transition-transform transform',
                open ? 'translate-x-0' : '-translate-x-full',
                'z-50 p-7'
            )}>
                <div className='flex items-center justify-between'>
                    <Heading order={3} className='text-primary font-extrabold'>Categories</Heading>
                    <span onClick={toggleDrawer} className='cursor-pointer'><Cross /></span>
                </div>
                <div className='flex flex-col gap-4 pt-6'>
                    {categories.map(({ label, value }) => (
                        <Link href={`/blogs/${value}`} key={value} onClick={toggleDrawer} className='p-4 bg-zinc-700 capitalize rounded-lg text-primary text-lg'>{label}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}