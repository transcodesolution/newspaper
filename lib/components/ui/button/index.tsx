import React from 'react';
import styles from './styles.module.scss'
import { cn } from '@/lib/utils/cn';
export enum ButtonVariant {
    dark = 'DARK',
    light = 'LIGHT'
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export default function Button({ children, variant = ButtonVariant.light, ...rest }: IButton) {
    return (
        <button className={cn(styles[`button-${variant.toLowerCase()}`],'rounded-full px-4 py-2')} {...rest}>
            {children}
        </button>
    );
}