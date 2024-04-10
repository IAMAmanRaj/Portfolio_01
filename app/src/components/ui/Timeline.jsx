import React from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger) 

const Timeline = () => {

    const tickRef1 = useRef(null);
    const textRef1 = useRef(null);
    const tickRef3 = useRef(null);
    const textRef3 = useRef(null);
    const tickRef2 = useRef(null);
    const textRef2 = useRef(null);
    const tickRef4 = useRef(null);
    const textRef4 = useRef(null);
    const JourneyTextRef = useRef(null);



    
  useEffect(() => {


    gsap.fromTo(
        tickRef1.current,
        {
            // Initial fill color
          scale: 1,  // Initial scale
          
        },
        {
          fill: 'blue',  // New fill color
          scale: 2,  // New scale
         
          scrollTrigger: {
            trigger: tickRef1.current,
            
            start: 'top 70%',
            end: 'top 66%',
            scrub: 2,
          },
        }
      );
      gsap.fromTo(
        textRef1.current,
        {
          fill: 'currentColor',  // Initial fill color
        
          opacity: 0.1,  // Initial opacity
        },
        {
          fill: 'blue',  // New fill color
         
          opacity: 1,  // New opacity
          scrollTrigger: {
            trigger: textRef1.current,
            start: 'top 70%',
            end: 'top 66%',
            scrub: 2,
          
           
          },
        }
      );







      gsap.fromTo(
        tickRef2.current,
        {
          
          scale: 1,  // Initial scale
         
        },
        {
          fill: 'blue',  // New fill color
          scale: 2,  // New scale
       
          scrollTrigger: {
            trigger: tickRef2.current,
            
            start: 'top 64%',
            end: 'top 60%',
            scrub: 2,
          },
        }
      );








      gsap.fromTo(
        tickRef3.current,
        {
          
          scale: 1,  // Initial scale
         
        },
        {
          fill: 'blue',  // New fill color
          scale: 2,  // New scale
       
          scrollTrigger: {
            trigger: tickRef3.current,
            
            start: 'top 60%',
            end: 'top 56%',
            scrub: 2,
          },
        }
      );
         gsap.fromTo(
        tickRef4.current,
        {
          
          scale: 1,  // Initial scale
         
        },
        {
          fill: 'blue',  // New fill color
          scale: 2,  // New scale
       
          scrollTrigger: {
            trigger: tickRef4.current,
            markers: true,
            start: 'top 55%',
            end: 'top 50%',
            scrub: 2,
          },
        }
      );


  }, []);



















  return (
    <div><ul className="timeline  bg-gray-950 py-12 px-24 timeline-snap-icon max-md:timeline-compact timeline-vertical">
    <li>
      <div className="timeline-middle" ref={tickRef1}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="h-5 w-5 text-current"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div ref={textRef1} className="timeline-start opacity-1 md:text-end mb-10 text-current">
        <time className="font-mono italic">1984</time>
        <div className="text-lg font-black">First Macintosh computer</div>
        The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
      </div>
      <hr/>
    </li>
    <li>
      <hr />
      <div className="timeline-middle " ref={tickRef2}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div ref={textRef2} className="timeline-end mb-10 ">
        <time className="font-mono italic">1998</time>
        <div className="text-lg font-black">iMac</div>
        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle" ref={tickRef3}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div ref={textRef3} className="timeline-start md:text-end mb-10">
        <time className="font-mono italic">2001</time>
        <div className="text-lg font-black">iPod</div>
        The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle" ref={tickRef4}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div ref={textRef4} className="timeline-end mb-10">
        <time className="font-mono italic">2007</time>
        <div className="text-lg font-black">iPhone</div>
        iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
      </div>
      <hr />
    </li>
  
  </ul></div>
  )
}

export default Timeline