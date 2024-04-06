import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import HeroSection from "./pages/HeroSection"
import { useState } from "react"
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
      })
        .from(["#title-1", "#title-2", "#title-3","#title-4"], {
          opacity: 0,
          y: "+=30",
          x: "-=30",
          stagger: 0.8,

        })
        .to(["#title-1", "#title-2", "#title-3","#title-4"], {
          opacity: 0,
       
          x:"+=30",
          delay: 0.4,
          stagger: 0.8,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
         
        }).from("#myjourney", {
          opacity: 0,
          duration: 2,
          
        }).from("#imageone", {
          opacity: 0,
          duration: 2,
        }).from("#imagetwo", {
          opacity: 0,
          duration: 2,
          
          onStart: () => setJourneyText('Till'),
          delay: 0.5,
        }).from("#imagethree", {
          opacity: 0,
          duration: 2,
          
          onStart: () => setJourneyText('Now'),
          delay: 0.5,
        })
        
    }, comp)

    return () => ctx.revert()
  }, [])
  return (
    <div className="relative  overflow-x-hidden" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-white absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col justify-around py-24 sm:py-8 pt-12   tracking-tight"
      >
        <h1 className="text-3xl text-black  md:text-5xl lg:text-9xl" id="title-1">
          Hi there , I am Aman
        </h1>
        <h1 className="text-3xl text-black   md:text-5xl lg:text-8xl" id="title-2">
        a Coding Enthusiast  
        </h1>
        <h1 className="text-3xl text-black  md:text-5xl lg:text-7xl" id="title-3">
        Passionate about Web Development.
        </h1>
        <h1 className="text-3xl text-black  md:text-5xl lg:text-6xl" id="title-4">
        and a Full stack Web Developer  :)
        </h1>
      </div>
      <div className=""><HeroSection journeyText={journeyText}  /></div>
  
      
    </div>
  )
}

export default App