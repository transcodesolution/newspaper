import React, { ReactNode } from 'react'
import Heading from '../../ui/heading'
import Link from 'next/link'
import ContactUsIcon from '@/lib/icons/contact.svg'
import TandCIcon from '@/lib/icons/t&c.svg'
import PrivacyIcon from '@/lib/icons/privacy.svg'
import FacebookIcon from '@/lib/icons/facebook.svg'
import InstaIcon from '@/lib/icons/instagram.svg'
import XIcon from '@/lib/icons/x.svg'
import ThreadIcon from '@/lib/icons/thread.svg'
export default function Footer() {
    return (
        <footer className='bg-secondary p-8'>
            <div className='container mx-auto flex flex-col justify-between gap-4 items-center lg:flex-row'>
                <div className='text-primary flex flex-col gap-4 lg:max-w-[60%]' >
                    <Heading order={2} className='font-extrabold text-center lg:text-start'>LOGO</Heading>
                    <p className='text-light-0'>Lorem ipsum dolor sit amet consectetur. Rhoncus ut ut et sed at posuere. Massa facilisi integer augue in. Maecenas vitae sit urna condimentum cursus in orci lorem. Consectetur nibh fermentum lectus. consectetur. Rhoncus ut ut et sed at posuere. Massa facilisi integer augue in</p>
                    <div className='flex flex-col lg:flex-row   gap-2 lg:gap-6'>
                        <Link href='/contact-us' className='flex gap-4 items-center'><ContactUsIcon /> <span className='underline'> Contact Us</span></Link>
                        <Link href='/contact-us' className='flex gap-4 items-center'><TandCIcon /> <span className='underline'> Terms & Condition</span></Link>
                        <Link href='/contact-us' className='flex gap-4 items-center'><PrivacyIcon /> <span className='underline'> Privacy Policy</span></Link>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-full lg:w-auto lg:items-end'>
                    <div className='flex gap-4 items-center justify-start lg:justify-end'>
                        <SocialMediaIcon svg={<FacebookIcon />} />
                        <SocialMediaIcon svg={<InstaIcon />} />
                        <SocialMediaIcon svg={<XIcon />} />
                        <SocialMediaIcon svg={<ThreadIcon />} />
                    </div>
                    <div className='text-primary flex flex-col lg:flex-row gap-2 lg:gap-4 justify-between lg:justify-normal font-semibold'>
                        <span className='underline'>Cookies</span>
                        <span className='underline'>Digital accessibility</span>
                        <span className='underline'>Site Feedback</span>
                    </div>
                    <p className='text-light-0'><span>© 2024 Cable News Network. All Rights Reserved.</span></p>
                </div>
            </div>
        </footer>
    )
}

const SocialMediaIcon = ({ svg }: { svg: ReactNode }) => {
    return <div className='flex items-center justify-center rounded-lg bg-primary h-10 w-10'>{svg}</div>
}