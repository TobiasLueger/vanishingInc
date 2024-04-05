import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface TileProps {
    title?: string,
    description?: string,
    imageSrc?: string,
    linkTo?: string,
    className?: string
}

const Tile = ({ className }: TileProps) => {
  return (
    <Link href={"#"} className={`${className} flex flex-col`}>
        <Image
            src="/img/product-images/counter-intuativ.png"
            alt="counter-intuativ"
            width={802}
            height={451}
            className='w-full rounded-2xl shadow-md'
            priority
        />
        <span>Vifa Copenhagen 2.0 Loudspeaker </span>
        <span>Mentalism</span>
        <span>$799.00</span>
    </Link>
  )
}

export default Tile