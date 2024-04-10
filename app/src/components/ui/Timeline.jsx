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
    const hrRef1 = useRef(null);
    const hrRef2 = useRef(null);
    const hrRef3 = useRef(null);
    const hrRef4 = useRef(null);



    
  useEffect(() => {


    gsap.fromTo(
        tickRef1.current,
        {
            // Initial fill color
          scale: 1,  // Initial scale
          
        },
        {
          fill: '#A5D8FF',  // New fill color
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
          color: 'currentColor',  // Initial fill color
        
          opacity: 0,  // Initial opacity
        },
        {
          color: '#A5D8FF',  // New fill color
         
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
        hrRef1.current,
        {
          opacity:0 // Initial background color
        },
        {
          opacity:1,
          backgroundColor: '#222E50',  // New background color
          scrollTrigger: {
            trigger: hrRef1.current,
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
          fill: '#A5D8FF',  // New fill color
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
        textRef2.current,
        {
          color: 'currentColor',  // Initial fill color
        
          opacity: 0,  // Initial opacity
        },
        {
          color: '#A5D8FF',  // New fill color
         
          opacity: 1,  // New opacity
          scrollTrigger: {
            trigger: textRef2.current,
            start: 'top 64%',
            end: 'top 60%',
            scrub: 2,
          
           
          },
        }
      );
      gsap.fromTo(
        hrRef2.current,
        {
          opacity:0  // Initial background color
        },
        {
          opacity:1,
          backgroundColor: '#222E50',  // New background color
          scrollTrigger: {
            trigger: hrRef2.current,
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
          fill: '#A5D8FF',  // New fill color
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
        textRef3.current,
        {
          color: 'currentColor',  // Initial fill color
        
          opacity: 0,  // Initial opacity
        },
        {
          color: '#A5D8FF',  // New fill color
         
          opacity: 1,  // New opacity
          scrollTrigger: {
            trigger: textRef3.current,
            start: 'top 60%',
            end: 'top 56%',
            scrub: 2,
          
           
          },
        }
      );

      gsap.fromTo(
        hrRef3.current,
        {
         opacity:0  // Initial background color
        },
        {
          opacity:1,
          backgroundColor: '#222E50',  // New background color
          scrollTrigger: {
            trigger: hrRef3.current,
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
          fill: '#A5D8FF',  // New fill color
          scale: 2,  // New scale
       
          scrollTrigger: {
            trigger: tickRef4.current,
            
            start: 'top 55%',
            end: 'top 50%',
            scrub: 2,
          },
        }
      );
      gsap.fromTo(
        textRef4.current,
        {
          color: 'currentColor',  // Initial fill color
        
          opacity: 0,  // Initial opacity
        },
        {
          color: '#A5D8FF',  // New fill color
         
          opacity: 1,  // New opacity
          scrollTrigger: {
            trigger: textRef4.current,
            start: 'top 55%',
            end: 'top 50%',
            scrub: 2,
          
           
          },
        }
      );

      gsap.fromTo(
        hrRef4.current,
        {
          opacity:0// Initial background color
        },
        {
          opacity:1,
          backgroundColor: '#222E50',  // New background color
          scrollTrigger: {
            trigger: hrRef4.current,
            start: 'top 55%',
            end: 'top 50%',
            scrub: 2,
          },
        }
      );


  }, []);



















  return (
    <div><ul className="timeline bg-gray-950 z-[3] py-12 px-2 lg:px-24 timeline-snap-icon max-md:timeline-compact timeline-vertical">
    <li>
      <div className="timeline-middle" ref={tickRef1}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="h-5 w-5 text-current"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div ref={textRef1} className="timeline-start  md:text-end mb-10 text-current pl-8 md:pl-0 md:mr-3">
        <time className="font-mono italic ">1984</time>
        <div className="text-lg font-black">First Macintosh computer</div>
        The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
      </div>
      <hr ref={hrRef1} className='z-[-4]'/>
    </li>
    <li className=''>
      
      <div className="timeline-middle " ref={tickRef2}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div ref={textRef2} className="timeline-end mb-10 text-current pl-8 md:pl-0 md:ml-3 ">
        <time className="font-mono italic ">1998</time>
        <div className="text-lg font-black">iMac</div>
        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
      </div>
      <hr ref={hrRef2} className='z-[-4]' />
    </li>
    <li>
      
      <div className="timeline-middle" ref={tickRef3}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div ref={textRef3} className="timeline-start pl-8  md:pl-0 text-current md:text-end mb-10 md:mr-3">
        <time className="font-mono italic ">2001</time>
        <div className="text-lg font-black">iPod</div>
        The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
      </div>
      <hr  ref={hrRef3} className='z-[-4]'/>
    </li>
    <li>
      
      <div className="timeline-middle" ref={tickRef4}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div ref={textRef4} className="timeline-end pl-8 text-current md:pl-0 mb-10 md:ml-3">
        <time className="font-mono italic ">2007</time>
        <div className="text-lg font-black">iPhone</div>
        iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
      </div>
      <hr ref={hrRef4} className='z-[-4]' />
    </li>
  
  </ul></div>
  )
}

export default Timeline