'use client'
import Button, { ButtonVariant } from '@/lib/components/ui/button';
import React from 'react';

interface ILoadMoreButton {
    currentBlogsCount: number;
}

export default function LoadMoreButton({ currentBlogsCount }: ILoadMoreButton) {
    const handleClick = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const currentCount = parseInt(searchParams.get('count') || currentBlogsCount.toString(), 10);
        const newCount = currentCount + 1;
        searchParams.set('count', newCount.toString());

        // Use the history API to replace the current state
        window.history.replaceState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Button
            variant={ButtonVariant.dark}
            className='text-xl font-bold px-8'
            onClick={handleClick}
        >
            Load More
        </Button>
    );
}