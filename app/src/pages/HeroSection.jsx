import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger) 
const HeroSection = () => {

useLayoutEffect(() => {

 gsap.to("#character", {
    opacity: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: "#character",
        scrub:true,
        markers:true,
        start: "top 80%",
        end: "top 20%",
    }
 })


}, [])



  return (
    <div className="flex bg-gray-950 flex-col overflow-auto">
        <div className="flex justify-center items-center h-screen">
          <h1 id="welcome"
            className="text-3xl  md:text-5xl lg:text-9xl font-bold text-gray-100 font-spaceGrotesk"
          >
            Welcome.
          </h1>
        </div>
       
        <div className='relative mx-auto text-xl  md:text-3xl lg:text-5xl  font-bold text-white '>
         <p className='flex flex-wrap gap-x-3 px-8 '>
            {"ScrollTrigger enables anyone to create jaw-dropping scroll-based animations with minimal code. Infinitely flexible. Scrub, pin, snap, or just trigger anything scroll-related, even if it has nothing to do with animation."
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
            {"ScrollTrigger enables anyone to create jaw-dropping scroll-based animations with minimal code. Infinitely flexible. Scrub, pin, snap, or just trigger anything scroll-related, even if it has nothing to do with animation."
            .split(" ").map((word,index)=>(
                <span id="word" key={index} className=''>
                    {word.split("").map((character,index)=>(
                    <span id="character" key={index} className=''>
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