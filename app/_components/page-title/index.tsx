import React, { ReactNode } from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils/cn';

interface IPageTitle {
    children: ReactNode
}
export default function PageTitle({ children }: IPageTitle) {
    return (
        <h1 className={cn(styles.pageTitle, 'text-4xl font-bold')}>{children}</h1>
    )
}
