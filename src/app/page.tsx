import Navigation from '@/components/Navigation/Navigation'
import Tile from '@/components/Tile/Tile'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex flex-row gap-32 flex-wrap'>
      <div>
        <Image
            src="/img/slider/slider1.png"
            alt="slider1"
            width={1728}
            height={572}
            className='rounded-xl shadow-md'
            priority
        />
      </div>
      <Tile className='w-[calc(50%-64px)]'/>
      <Tile className='w-[calc(50%-64px)]'/>
      <Tile className='w-[calc(33.33333333%-65px)]'/>
      <Tile className='w-[calc(33.33333333%-65px)]'/>
      <Tile className='w-[calc(33.33333333%-65px)]'/>
    </div>
  )
}
