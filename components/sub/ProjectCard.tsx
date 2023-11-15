import React from 'react'
import Image from "next/image"
import Link from 'next/link'
interface Props{
    src:string,
    title:string,
    description:string,
    technology:string,
   
}

const ProjectCard = ({src,title,description,technology}:Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2a0e61]'>
        <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
        />
        <div className='relative p-4'>
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-gray-300'>{description}</p>
            <h1 className='text-xl font-semibold text-[#ac9dc9]'>{technology}</h1>
            <div className='flex flex-row items-end justify-center sm:flex-col'>
            <Link href={"www.google.com"}> <Image  src={'/gitwhite.png'} alt='there' width={80} height={80} className='cursor-pointer' ></Image></Link>

            </div>

        </div>
    </div>
  )
}

export default ProjectCard
