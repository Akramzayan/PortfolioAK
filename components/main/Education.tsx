"use client"
import React, { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'

interface Props{
  type:string,
  time:string,
  place:string,}
  
const Details =({type,time,place}:Props) =>{
  const ref = useRef(null)
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5,type:"spring"}}
    >
      <h3 className='capitalize font-bold text-2xl  text-[#7042f88b]'>
        {type}
     
    
      </h3>
      <span className='capitalize font-medium text-dark/75 text-white'>{time} | {place}</span>
   
    
    </motion.div>
  </li>
}

const Education = () => {
  const ref =useRef(null);
  const {scrollYProgress}=useScroll(
    {
      target:ref,
      offset:["start end","center start"]
    }
  )
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='font-bold text-6xl mb-32 w-full text-center font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
      Education

      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
      <motion.div 
        style={{scaleY:scrollYProgress}}
       className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details  type="Tunisian Baccalaureate "
                    time="July-August 2022" place="Sousse |Tunisia"
           
          />
            <Details
            type="Integrated Preparatory "
            time="2019-2021"
            place="Universty Polytechnique Sousse"
            
          />
          
            <Details
            type="computer science engineering  "
            time="2021-present"
            place="Universty Polytechnique Sousse"
            
          />
          
          
        </ul>
      </div>
    </div>
  )
}

export default Education