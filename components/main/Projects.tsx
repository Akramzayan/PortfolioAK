import React from 'react'
import ProjectCard from '../sub/ProjectCard'


const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 '
    id="Projects">
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard src='/Portfolio.png'
                title='My Portfolio'
                description='Explore my portfolio sample—crafted with Next.js and polished with Tailwind CSS. Framer Motion adds seamless animations, while Three.js introduces captivating 3D elements. Its a fusion of technology and design, redefining digital presentation standards.'
                technology='Next js TypeScript Tailwind-Css Three Js Framer-Motion'
                githublink='https://github.com/Akramzayan/PortfolioAK'
            />

             <ProjectCard src='/Nike.png'
                title='Nike Landing Page'
                description='Crafted a dynamic, fully responsive Nike clone using React and Tailwind CSS. Seamlessly blending form and function, this project showcases my expertise in front-end development, responsive design, and the effective use of modern web technologies.'
                technology='React js Tailwind-Css'
                githublink='https://github.com/Akramzayan/Nike'
            />
             <ProjectCard src='/Smartex.png'
                title='Smartex'
                description='Designed and developed a specialized web application for efficient textile industry management. The solution, with its user-friendly interface, enhances production processes, streamlines inventory management, and facilitates team coordination, showcasing my expertise in crafting tailored software solutions.

                '
                technology='React.js Scss'
                githublink='https://github.com/Akramzayan/'
            />
            
         

        </div>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard src='/gatecars.png'
                title='GateCars'
                description='Explore my portfolio sample—crafted with Next.js and polished with Tailwind CSS. Framer Motion adds seamless animations, while Three.js introduces captivating 3D elements. Its a fusion of technology and design, redefining digital presentation standards.'
                technology='Reactjs  MangoDb express Node js'
                githublink='https://github.com/Akramzayan/GateCars'
                
            />
             <ProjectCard src='/Crypto app.png'
                title='Crypto app'
                description=' web application that seamlessly integrates with the Coin Gecko API through Axios. Providing a comprehensive overview of the cryptocurrency market, CryptoVue delivers real-time data and analysis, making it the ideal choice for informed investors. Elevate your crypto experience with CryptoVue in your portfoli .'
                technology='Reactjs css '
                githublink='https://github.com/Akramzayan/Nike'
            />
            <ProjectCard src='/Portfolio.png'
                title='My Portfolio'
                description='Explore my portfolio sample—crafted with Next.js and polished with Tailwind CSS. Framer Motion adds seamless animations, while Three.js introduces captivating 3D elements. Its a fusion of technology and design, redefining digital presentation standards.'
                technology='Next js TypeScript Tailwind-Css Three Js Framer-Motion'
                githublink='https://github.com/Akramzayan/PortfolioAK'
            />
            
         

        </div>
       
  
    </div>
  )
}

export default Projects
