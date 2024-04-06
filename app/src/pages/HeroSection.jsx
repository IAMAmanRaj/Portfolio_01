import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import bulb from '/images/diego-ph-fIq0tET6llw-unsplash.jpg';
import pages from '/images/brandi-redd-aJTiW00qqtI-unsplash.jpg'
import comp from '/images/ben-kolde-bs2Ba7t69mM-unsplash.jpg';
gsap.registerPlugin(ScrollTrigger) 
const HeroSection = ({ journeyText }) => {

useLayoutEffect(() => {

 gsap.to("#character", {
    opacity: 1,
    stagger: 4.2,
    scrollTrigger: {
        trigger: "#character",
        scrub:true,
        markers:true,
        start: "top 88%",
        end: "top 20%",
    }
 })

 gsap.to("#charactertwo", {
    opacity: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: "#charactertwo",
        scrub:true,
        markers:true,
        start: "top 90%",
        end: "top 20%",
    }
 })
 gsap.to("#characterthree", {
    opacity: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: "#characterthree",
        scrub:true,
        markers:true,
        start: "top 90%",
        end: "top 20%",
    }
 })
 gsap.to("#characterfour", {
    opacity: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: "#characterfour",
        scrub:true,
        markers:true,
        start: "top 90%",
        end: "top 40%",
    }
 })

}, [])



  return (
    <div className="flex bg-gray-950 flex-col overflow-auto">
        <div   className="relative flex justify-center items-center h-screen">
          
            

            <img id="imageone" className='absolute h-screen rounded-full p-4 md:p-12 lg:p-16 xl:p-20 mx-12 mt-12   border-2 border-white w-full object-cover' src={bulb} alt=''/>
            <img id="imagetwo" className='absolute h-screen rounded-full p-4 md:p-12 lg:p-16 xl:p-20 mx-12 mt-12   border-2 border-white w-full object-cover' src={pages} alt=''/>
            <img id="imagethree" className='absolute h-screen rounded-full p-4 md:p-12  lg:p-16 xl:p-20 mx-12 mt-12   border-2 border-white w-full object-cover' src={comp} alt=''/>
            <div id="myjourney" className='w-full absolute flex justify-center items-center  text-center self-center '>
          <h1 
          
            className="text-3xl  absolute  md:text-5xl lg:text-8xl font-bold text-slate-100 font-spaceGrotesk transition duration-300"
          >
            {journeyText}
          </h1>
          </div>
        </div>
       
        <div className='relative mx-auto text-xl  md:text-3xl lg:text-5xl  font-bold text-white mt-24'>
         <p className='flex flex-wrap gap-x-3 px-8  '>
            {"Few years back , I knew nothing about web. It got my attention in the second year of college when I started learning about languages and frameworks used to build websites like this and I was a-m-a-z-e-d. I knew this would be an interesting thing to do rather than doing dsa after classes T_T"
            .split(" ").map((word,index)=>(
                <span id="character" key={index} className='opacity-0'>
                    {word.split("").map((character,index)=>(
                    <span id="character" key={index} className='opacity-0'>
                        {character}
                    </span>
                ))} 
                </span>
            ))}
            </p> 
            <p  className='absolute top-0 flex flex-wrap gap-x-3 opacity-5 px-8'>
            {"Few years back , I knew nothing about web. It got my attention in the second year when I started learning about languages and frameworks used to build websites like this and I was a-m-a-z-e-d. I knew this would be an interesting thing to do rather than doing dsa after classes."
            .split(" ").map((word,index)=>(
                <span  key={index} className=''>
                    {word.split("").map((character,index)=>(
                    <span  key={index} className=''>
                        {character}
                    </span>
                ))} 
                </span>
            ))}
            </p>
            </div>
            <div className='relative mx-auto text-xl  md:text-3xl lg:text-5xl  font-bold text-white mt-80'>
            <p className='flex flex-wrap gap-x-3 px-8 '>
            {"Then I started focusing on project based learning as much as I could. I've been making projects and learning things through this journey. As a developer, I feel there's no end to these cool stuffs which excites me even more :)"
            .split(" ").map((word,index)=>(
                <span id="charactertwo" key={index} className='opacity-0'>
                    {word.split("").map((character,index)=>(
                    <span id="charactertwo" key={index} className='opacity-0'>
                        {character}
                    </span>
                ))} 
                </span>
            ))}
            </p> 
            
            <p className='absolute top-0 flex flex-wrap gap-x-3 opacity-5 px-8'>
            {"Then I started focusing on project based learning as much as I could. I've been making projects and learning things through this journey. As a developer, I feel there's no end to these cool stuffs which excites me even more :)"
            .split(" ").map((word,index)=>(
                <span  key={index} className=''>
                    {word.split("").map((character,index)=>(
                    <span  key={index} className=''>
                        {character}
                    </span>
                ))} 
                </span>
            ))}
            </p>
            </div>

            <div className='relative mx-auto text-xl  md:text-3xl lg:text-5xl  font-bold text-white mt-80'>
            <p className='flex flex-wrap gap-x-3 px-8 '>
            {"I've never stopped since then"
            .split(" ").map((word,index)=>(
                <span id="characterthree" key={index} className='opacity-0'>
                    {word.split("").map((character,index)=>(
                    <span id="characterthree" key={index} className='opacity-0'>
                        {character}
                    </span>
                ))} 
                </span>
            ))}
            </p> 
            
            <p className='absolute top-0 flex flex-wrap gap-x-3 opacity-5 px-8'>
            {"I've never stopped since then"
            .split(" ").map((word,index)=>(
                <span  key={index} className=''>
                    {word.split("").map((character,index)=>(
                    <span  key={index} className=''>
                        {character}
                    </span>
                ))} 
                </span>
            ))}
            </p>
            </div>
            <div className='relative mx-auto text-xl  md:text-3xl lg:text-5xl  font-bold text-white mt-80'>
            <p className='flex flex-wrap gap-x-3 px-8 '>
            {"#Never stop learning."
            .split(" ").map((word,index)=>(
                <span id="characterfour" key={index} className='opacity-0'>
                    {word.split("").map((character,index)=>(
                    <span id="characterfour" key={index} className='opacity-0'>
                        {character}
                    </span>
                ))} 
                </span>
            ))}
            </p> 
            
            <p className='absolute top-0 flex flex-wrap gap-x-3 opacity-5 px-8'>
            {"#Never stop learning."
            .split(" ").map((word,index)=>(
                <span  key={index} className=''>
                    {word.split("").map((character,index)=>(
                    <span  key={index} className=''>
                        {character}
                    </span>
                ))} 
                </span>
            ))}
            </p>
            </div>
        
        <div className='h-screen'/>
    </div>
  )
}

export default HeroSection