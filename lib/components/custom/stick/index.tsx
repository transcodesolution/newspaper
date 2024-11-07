import { cn } from '@/lib/utils/cn';
import React from 'react';

interface IStick {
    width?: number;
    height?: number;
}

export default function Stick({ width = 24, height = 2 }: IStick) {
    return (
        <span
            style={{ width: `${width}px`, height: `${height}px` }}
            className={cn('bg-light-border rounded-xl inline-block')}
        />
    );
}