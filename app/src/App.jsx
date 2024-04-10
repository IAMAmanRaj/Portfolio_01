import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import HeroSection from "./pages/HeroSection"
import { useState } from "react"
 import BackgroundBeams from "./components/ui/BackgroundBeams"


import { ShiftingDropDown } from "./components/ui/ShiftingDropDown"
import { StickyScrollRevealDemo } from "./components/ui/StickyScrollReveal"
 import Example from "./components/ui/HorizontalCarousel"

 import { StickyScroll } from "./components/ui/StickyScroll"
import Timeline from "./components/ui/Timeline"
 

const App = () => {
  const [journeyText, setJourneyText] = useState('My journey');
  const comp = useRef(null)






  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];
  






















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
      .from({}, {
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",  
     
      })
      .from({}, {
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
        onStart: () => {

          setJourneyText('Till');
        
        },
       
      })
      .from({}, {
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
        onStart: () => {
          
          setJourneyText('Now');
          
        },
     
        
        onComplete: () => {
          gsap.to({}, {
            duration: 5,  // Set the duration here
            onStart: () =>{ setJourneyText("Let's dive in");
            
          },
          });
         
        }
      })
        
    }, comp)

    return () => ctx.revert()
  }, [])
  return (
    <>
    <ShiftingDropDown  />

    <div className="relative  overflow-x-hidden" ref={comp}>
   
      
      <div
        id="intro-slider"
        className="h-screen   px-10 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col justify-around py-24 sm:py-8  tracking-tight"
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

   
   
    <Example />
    <Timeline/>
    
    <div className="h-screen bg-gray-950 "/>
   
    </>
  )
}

export default App