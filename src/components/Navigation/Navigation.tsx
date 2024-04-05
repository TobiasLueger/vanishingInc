'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, UserCircle } from '@phosphor-icons/react'

function Navigation() {
    return (
        <div className="flex flex-col items-center justify-between">
            <nav className="z-10     w-full items-center justify-between font-sans text-sm lg:flex py-[4.125rem]">
                <div className="fixed left-0 top-0 flex w-full justify-center lg:static lg:w-auto ">
                    <Link href={"#"} className="relative flex place-items-center z-[-1]">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/vanishing-inc-logo.png"
                            alt="Vanishing Inc Logo"
                            width={300}
                            height={43}
                            priority
                        />
                    </Link>
                </div>
                <div className='flex flex-row gap-28 items-center'>
                    <ul className='flex flex-row gap-28 text-2xl'>
                        <li>
                            <Link  href="/">Magic</Link>
                        </li>
                        <li>
                            <Link  href="/">Masterclass</Link>
                        </li>
                        <li>
                            <Link  href="/">Conventions</Link>
                        </li>
                        <li>
                            <Link  href="/">Blog</Link>
                        </li>
                    </ul>
                    <div className='flex flex-row gap-8 items-center'>
                        <button><UserCircle size={40} weight='bold'/></button>
                        <button><ShoppingCart size={40} weight='bold'/></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation