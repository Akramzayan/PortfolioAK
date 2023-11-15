"use client"
import React, { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'

interface Props{
  position:string,
  company:string,
  companyLink:string,
  time:string,
  address:string,
  work:string,
  technologies:string
}
const Details =({position,company,companyLink,time,address,work,technologies}:Props) =>{
  const ref = useRef(null)
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5,type:"spring"}}
    >
      <h3 className='capitalize font-bold text-2xl text-cyan-500'>{position}&nbsp;<a href={companyLink} 
      target='_blank'
      className='text-[#7042f88b]'
      >@{company}</a></h3>
      <span className='capitalize font-medium text-dark/75 text-white'>{time} | {address}</span>
      <p className='font-medium w-full text-white'>{work}</p>
      <p className='font-medium w-full text-white'>{technologies}</p>
    
    </motion.div>
  </li>
}

const Experience = () => {
  const ref =useRef(null);
  const {scrollYProgress}=useScroll(
    {
      target:ref,
      offset:["start end","center start"]
    }
  )
  return (
    <div className='my-4'>
      <h2 className='font-bold text-6xl mb-32 w-full text-center font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
      Experience

      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
      <motion.div 
        style={{scaleY:scrollYProgress}}
       className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details position="Intern Mobile developer " company="REDEVIT DIGITAL SERVICES"
          companyLink="https://www.redevit.tn/"            time="July-August 2022" address="Sousse,Tunisia"
            work="Development of mobile application for ridesharing services (similar to uber)"
            technologies="Technologies: React-Native Cli, Google-API-Map"
          />
           <Details position="Intern FullStack Web developer " company="STE ITGATE GROUP"
          companyLink="https://www.itgate-group.com/fr/"            time="August-September 2023" address="Sousse,Tunisia"
            work="Conception and development of a responsive  web application For Rent-Car Agency"
            technologies="Technologies:MongoDB, Express.js, Reactjs, Node.js,Passport,jwt and Redux."
          />
          
          
        </ul>
      </div>
    </div>
  )
}

export default Experience