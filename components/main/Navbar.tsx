import React from 'react'
import Image from 'next/image'
import mee from '../../public/akram.jpg'
import {LinkedInIcon } from '@/constants'
import Link from 'next/link'
import github from "../../public/github-mark-white.png"
const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow[#2A0E61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='h-full w-full flex flex-rows items-center justify-between m-auto px-[10px]'>
            <a href="About-Me" className='h-auto w-auto flex flex-row items-center'>
               <Image
               src={mee}
               alt='Logo'
               width={70}
               height={70}
               className='cursor-pointer hover:animate-slowspin rounded-lg'/>
               <span className='font-bold ml-[10px]  hidden md:block text-gray-300'>Akram Zayane</span>
            </a>
            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-30'>
                <div className='flex items-center justify-between w-full h-auto  border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py[10px] rounded-full text-gray-200'>
                    <a href="#About-Me" className='cursor-pointer'>About Me</a>    
                    <a href="#skills" className='cursor-pointer'>Skills</a>    
                    <a href="#Projects" className='cursor-pointer'>Projects</a>    
             
                </div>
                

            </div>
            <div className='flex flex-row gap-10 '>
             <Link href='https://github.com/Akramzayan/' target='_blank' className='w-[24px] h-[24px]'><Image src={github} alt='git-Hub' height={24} width={24}/></Link>
             <Link href="https://www.linkedin.com/in/akram-zayane-702005207/" target='_blank' className='w-[24px] h-[24px]'><LinkedInIcon/></Link>
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
