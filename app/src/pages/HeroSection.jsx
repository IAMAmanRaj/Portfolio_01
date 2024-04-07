import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import bulb from '/images/diego-ph-fIq0tET6llw-unsplash.jpg';
import pages from '/images/brandi-redd-aJTiW00qqtI-unsplash.jpg'
import comp from '/images/ben-kolde-bs2Ba7t69mM-unsplash.jpg';
 import { useRef } from 'react';
import { useEffect } from 'react';
import bg from '/images/greg-rakozy-oMpAz-DN-9I-unsplash.jpg';
import bg2 from '/images/ian-schneider-TamMbr4okv4-unsplash.jpg';

gsap.registerPlugin(ScrollTrigger) 
const HeroSection = ({ journeyText }) => {
    const textRef = useRef(null);
  const bgRef = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const bg2Ref = useRef(null);
  const JourneyTextRef = useRef(null);
  const imgOneRef = useRef(null);
  const imgTwoRef = useRef(null);
  const imgThreeRef = useRef(null);

    
  

  useEffect(() => {


    gsap.fromTo( JourneyTextRef.current, 
        { x: 0 }, 
        { x: 390,
            
          scrollTrigger: {
            trigger:  JourneyTextRef.current,
          
           start: 'top 42%',  // Change this line
           end: 'top 40%',
            scrub:true ,// Increase this value for a smoother effect
          
        }
        }
      );
     

    gsap.fromTo(textRef.current, 
      { y: 0 }, 
      { y: 70, 
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 50%',
         
          end: 'bottom 20%',
          scrub:5 // Increase this value for a smoother effect
        }
      }
    );
  
    gsap.fromTo(bgRef.current, 
      { y: 0 }, 
      { y: -100, 
        scrollTrigger: {
          trigger: bgRef.current,
          start: 'top 50%',
         
          end: 'bottom bottom',
          scrub: 5  // Increase this value for a smoother effect
        }
      }
    );


    gsap.fromTo(text2Ref.current, 
      { y: 0 }, 
      { y: 100, 
        scrollTrigger: {
          trigger: text2Ref.current,
          start: 'top 50%',
         
          end: 'bottom 20%',
          scrub:5 
        }
      }
    );
  
    gsap.fromTo(bg2Ref.current, 
      { y: 0 }, 
      { y: -100, 
        scrollTrigger: {
          trigger: bg2Ref.current,
          start: 'top 50%',
         
          end: 'bottom bottom',
          scrub: 5  
        }
      }
    );
    gsap.fromTo(text3Ref.current, 
      { y: 0 }, 
      { y: -200, 
        scrollTrigger: {
          trigger: text3Ref.current,
          start: 'bottom bottom',
          markers:true,
          end: 'bottom 30%',
          scrub:5 
        }
      }
    );
    gsap.fromTo(text4Ref.current, 
      { y: 0 }, 
      { y: -200, 
        scrollTrigger: {
          trigger: text4Ref.current,
          start: 'bottom bottom',
         
          end: 'bottom 30%',
          scrub:5 
        }
      }
    );


  }, []);



useLayoutEffect(() => {

 gsap.to("#character", {
    opacity: 1,
    
    stagger: 4.2,
    scrollTrigger: {
        trigger: "#character",
        scrub:1,
      
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
       
        start: "top 90%",
        end: "top 40%",
    }
 })




}, [])



  return (
    <div  className="flex  bg-gray-950 flex-col ">
        <div   className="relative flex justify-center items-center h-screen">
          
            

            <img ref={imgOneRef} id="imageone" className='absolute h-screen rounded-full p-4 md:p-12 lg:p-16 xl:p-20 mx-12 mt-4   border-2 border-white w-full object-cover' src={bulb} alt=''/>
            <img ref={imgTwoRef}  id="imagetwo" className='absolute h-screen rounded-full p-4 md:p-12 lg:p-16 xl:p-20 mx-12 mt-4   border-2 border-white w-full object-cover' src={pages} alt=''/>
            <img ref={imgThreeRef}  id="imagethree" className='absolute h-screen rounded-full p-4 md:p-12  lg:p-16 xl:p-20 mx-12 mt-4   border-2 border-white w-full object-cover' src={comp} alt=''/>
            <div id="myjourney" className='w-full absolute flex justify-center items-center  text-center self-center '>
          <h1 
          ref={JourneyTextRef}
            className="text-3xl  absolute  md:text-5xl lg:text-8xl font-bold text-slate-100 font-spaceGrotesk transition duration-300"
          >
            {journeyText}
          </h1>
          </div>
        </div>
       
        <div  className='relative h-screen  text-xl  md:text-3xl lg:text-5xl  font-bold text-white mt-32 flex justify-center text-center'>
            
           <img  ref={bgRef} src={bg} alt='bg-body' className='absolute h-[800px] w-screen object-cover border-t-slate-200 border-1   rounded-t-full  '></img>
           <div className='relative z-10 w-full' ref={textRef}>
         <p  className='flex absolute flex-wrap gap-x-3 mx-auto px-24 top-[15%] lg:top-[20%]  '>
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
            
            <p  className='absolute top-[15%]   lg:top-[20%] flex flex-wrap gap-x-3 opacity-40 mx-auto px-24 '>
            {"Few years back , I knew nothing about web. It got my attention in the second year of college when I started learning about languages and frameworks used to build websites like this and I was a-m-a-z-e-d. I knew this would be an interesting thing to do rather than doing dsa after classes T_T"
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
            </div>
            <div className='relative h-screen  text-xl  md:text-3xl lg:text-5xl  font-bold text-white mt-32 flex justify-center text-center'>
            <img  ref={bg2Ref}  src={bg2} alt='bg-body2' className='absolute opacity-20 h-[800px] w-screen object-cover border-t-slate-200 border-1 rounded-b-full   '></img>
            <div  ref={text2Ref} className='relative z-10 w-full' >
            <p className='flex absolute flex-wrap gap-x-3 mx-auto px-24 top-[2%] '>
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
            
            <p className='absolute  flex flex-wrap gap-x-3 top-[2%] opacity-40 mx-auto px-24'>
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
            </div>

            <div ref={text3Ref} className='relative mx-auto text-xl  md:text-3xl lg:text-5xl  font-bold text-white mt-40'>
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
            <div ref={text4Ref} className='relative mx-auto text-xl  md:text-3xl lg:text-5xl  font-bold text-white mt-80'>
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