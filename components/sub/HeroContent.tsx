'use client'
import React from 'react'
import {motion} from "framer-motion"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/20/solid'
import Image from "next/image"
const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'
        id='About-Me'>
            <motion.div
            variants={slideInFromTop}
            className='welcome-box w-[400px] h-[80px] py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 '/>
                <h1 className='welcome-text text-white text-[13px]'> 
                Akram Zayane <br /> 🚀 Software Engineering Student and Full-Stack Developer  </h1>
            </motion.div>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                <span>
                Providing 
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> The Best </span> Project Experience
                </span>
            </motion.div>
            <motion.p
              variants={slideInFromLeft(0.8)}
              className='text-lg text-gray-400 my-5 max-w-[600px]'  
            >
                I&apos;m  a software engineering student && Fullstack Developer.  I also have some exposure to artificial intelligence and machine learning. I&apos; m open to exploring a variety of opportunities
                <br />
                Check Out My Projects and Skills 

            </motion.p>
            <motion.a
            variants={slideInFromLeft(1)}
            href={"/public/Akram zayane.pdf"} download={true}
            className='py-2 button-primary w-[200px] text-center text-white cursor-pointer rounded-lg w-max[200px]'>
                My Resume
            </motion.a>
            <motion.a
            variants={slideInFromRight(1)}
            href={"mailto:akremzayane@gmail.com" } target={"_blank"}
            className='py-2 button-primary w-[200px] text-center text-white cursor-pointer rounded-lg w-max[200px]'>
               Contact
              
               
            </motion.a>

        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='flex items-center justify-center h-full w-full'>
            <Image
            src="/mainIconsdark.svg"
            alt='work.icons'
            height={650}
            width={650}/>
          
        </motion.div>
      
    </motion.div>
  )
}

export default HeroContent
