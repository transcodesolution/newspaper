import React from 'react'
import Button, { ButtonVariant } from '../../ui/button'
import CategoryMenu from './components/category-menu'
export default function Header() {
    return (
        <header className=' w-full py-4 px-8 border-b border-black'>
            <div className='flex justify-between container mx-auto items-center'>
                <CategoryMenu />
                <div>LOGO</div>
                <Button variant={ButtonVariant.dark} >English(USA)</Button>
            </div>
        </header>
    )
}
