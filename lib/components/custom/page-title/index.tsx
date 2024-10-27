import React, { ReactNode } from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils/cn';
import Heading from '../../ui/heading';

interface IPageTitle {
    children: ReactNode
}
export default function PageTitle({ children }: IPageTitle) {
    return (
        <Heading order={1} className={cn(styles.pageTitle, 'text-4xl font-bold')}>{children}</Heading>
    )
}
