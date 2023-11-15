"use client"
import React from 'react'
import {motion} from "framer-motion"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/20/solid'

const Skilltext = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'>
                Making Projects With Modern Technologies And A Good Dose of Creativity 

            </motion.div>
            <motion.div
            variants={slideInFromRight(0.5)}
            className='cursive text-[30px] text-gray-200 mb-10 mt-[10px] text-center'>
                Let s Make Ideas Into Realty  

            </motion.div>
      
    </div>
  )
}

export default Skilltext
