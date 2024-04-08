import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import HeroSection from "./pages/HeroSection"
import { useState } from "react"
 import BackgroundBeams from "./components/ui/BackgroundBeams"

const App = () => {
  const [journeyText, setJourneyText] = useState('My journey');
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
        ease: "power2.inOut"  // Add this line
      })
      .from(["#title-1", "#title-2", "#title-3","#title-4"], {
        opacity: 0,
        y: "+=30",
        x: "-=30",
        stagger: 0.8,
        ease: "power2.inOut"  // Add this line
      })
      .to(["#title-1", "#title-2", "#title-3","#title-4"], {
        opacity: 0,
        x:"+=30",
        delay: 0.4,
        stagger: 0.8,
        ease: "power2.inOut"  // Add this line
      })
      .to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        ease: "power2.inOut"  // Add this line
      })
      .from("#myjourney", {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut"  // Add this line
      })
      .from("#imageone", {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",  // Add this line
        onComplete: () => gsap.to("#imageone", {opacity: 0, ease: "power2.inOut"})  // Add ease here too
      })
      .from("#imagetwo", {
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",  // Add this line
        onStart: () => setJourneyText('Till'),
        onComplete: () => {
       
          gsap.to("#imagetwo", {opacity: 0, ease: "power2.inOut"});
        } // Add ease here too
        
      })
      .from("#imagethree", {
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
      onStart: () => setJourneyText('Now'),
     
        
        onComplete: () => {
          gsap.to({}, {
            duration: 5,  // Set the duration here
            onStart: () => setJourneyText("Let's dive in")
          });
          gsap.to("#imagethree", {opacity: 0, ease: "power2.inOut"});
        }
      })
        
    }, comp)

    return () => ctx.revert()
  }, [])
  return (
    <div className="relative  overflow-x-hidden" ref={comp}>
      
      <div
        id="intro-slider"
        className="h-screen bg-teal-900 bg-opacity-30  p-10 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col justify-around py-24 sm:py-8 pt-12   tracking-tight"
      >
        
       
        <h1 className="text-3xl text-white  md:text-5xl lg:text-9xl" id="title-1">
          Hi there , I am Aman
        </h1>
        <h1 className="text-3xl text-white   md:text-5xl lg:text-8xl" id="title-2">
        a Coding Enthusiast  
        </h1>
       
        <h1 className="text-3xl text-white  md:text-5xl lg:text-7xl" id="title-3">
        Passionate about Web Development.
        </h1>
        <h1 className="text-3xl text-white  md:text-5xl lg:text-6xl" id="title-4">
        and a Full stack Web Developer  :)
        </h1>
      </div>
      <div className="">
      <BackgroundBeams className="fixed"/>
        <HeroSection journeyText={journeyText} /></div>
      
    
    </div>
  )
}

export default App