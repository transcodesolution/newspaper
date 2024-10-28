import React from 'react'
import Button, { ButtonVariant } from '../../ui/button'
import CategoryMenu from './components/category-menu'
import Link from 'next/link'
export default function Header() {
    return (
        <header className=' w-full py-4 px-8 border-b border-black'>
            <div className='flex justify-between container mx-auto items-center'>
                <CategoryMenu />
                <Link href='/'>LOGO</Link>
                <Button variant={ButtonVariant.dark} className='font-bold' >English(USA)</Button>
            </div>
        </header>
    )
}
