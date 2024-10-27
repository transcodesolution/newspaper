import { cn } from '@/lib/utils/cn';
import React, { ReactNode } from 'react';
import styles from './styles.module.scss'

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
    order: 1 | 2 | 3 | 4 | 5 | 6; // Restrict to valid heading levels
    children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ order, children, className, ...props }) => {
    const tagName = `h${order}` as keyof JSX.IntrinsicElements;
    const classNames = cn(`${styles[`heading-${order}`]}`, className);

    return React.createElement(tagName, { className: classNames, ...props }, children);
};

export default Heading;