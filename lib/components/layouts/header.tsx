import React from 'react'
import Hambergur from '@/lib/icons/hambergure.svg'
import Button, { ButtonVariant } from '../ui/button'
export default function Header() {
    return (
        <header className='container mx-auto w-full py-4'>
            <div className='flex justify-between'>
                <Hambergur />
                <div>LOGO</div>
                <Button variant={ButtonVariant.dark} >English(USA)</Button>
            </div>
        </header>
    )
}
