import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import HeroSection from "../components/sections/Hero/HeroSection";
import SparklesCore from "../components/effects/ParticlesAnimation";
import SkillsCarousel from "../components/sections/Skills/SkillsCarousel";
import Timeline from "../components/sections/Timeline/Timeline";
import { HoverImageLinks as ProjectsSection } from "../components/sections/Projects/ProjectsSection";
import Footer from "../components/layout/Footer/Footer";

const Landing = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
    
        t1.from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "+=30",
          x: "-=30",
          stagger: 0.8,
          ease: "power2.inOut", // Add this line
          delay: 1.2,
        })
         .to("#intro-slider", {
          opacity: 0,
           duration: 0.8,
          onComplete: () => {
            // Hide the intro-slider completely after animation
            gsap.set("#intro-slider", { 
              display: "none",
              zIndex: -1 
            });
          }
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative overflow-hidden " ref={comp}>
        <div
          id="intro-slider"
          className="h-screen px-10 z-30 bg-[#001219] absolute top-0 left-0 font-spaceGrotesk w-full flex flex-col justify-around pt-24 py-8 sm:py-8 lg:py-20  tracking-tight"
        >
          <h1
            className="text-3xl text-white  md:text-5xl lg:text-8xl"
            id="title-1"
          >
            Hi there , I am Aman
          </h1>
          <h1
            className="text-3xl text-white   md:text-5xl lg:text-8xl"
            id="title-2"
          >
            a Coding Enthusiast
          </h1>

          <h1
            className="text-3xl text-white  md:text-5xl lg:text-7xl"
            id="title-3"
          >
            Interested in UI/UX.
          </h1>
          <h1
            className="text-3xl text-white  md:text-5xl lg:text-6xl"
            id="title-4"
          > and a Frontend Engineer.
          </h1>
        </div>

          <HeroSection />
      </div>
     <div className="h-screen relative bg-[#001219] pt-48 flex flex-col justify-between">
        <div className="flex h-full items-center justify-center relative">
          <span className="font-semibold uppercase text-neutral-500">
            <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-md">
              <h1
                id="timeline"
                className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white absolute opacity-40 z-10"
              >
                Timeline
              </h1>
              <div className="md:w-[45rem] w-full rounded-full h-64 relative">
                {/* Gradients */}
                <div className="hidden md:block md:absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="hidden md:block md:absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="hidden md:block md:absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="hidden md:block md:absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />


              </div>
            </div>
          </span>
        </div>
        <Timeline />
        <div className="bg-[#001219]">
          <SkillsCarousel />
        </div>

        <div className="flex bg-[#001219] h-48 items-center justify-center">
          <span className="font-semibold  text-neutral-500">
            <div className=" h-[40rem] flex flex-col items-center justify-center overflow-hidden ">
              <h1
                id="projects"
                className="md:text-7xl z-[50] text-3xl lg:text-9xl font-bold text-center text-blue-500 hover:cursor-pointer absolute opacity-30 hover:opacity-70 transition-all duration-500"
              >
                Projects
              </h1>
              <div className=" md:w-[40rem] rounded-full  h-40 relative">
                {/* Gradients */}
                <div className="hidden md:block md:absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="hidden md:block md:absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="hidden md:block md:absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="hidden md:block md:absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}

                {/* Radial Gradient to prevent sharp edges */}
              </div>
            </div>
          </span>
        </div>

        <div className="bg-[#001219]">
          <div className="">
            <ProjectsSection style={{ zIndex: 10 }} />
          </div>
        </div>

        <div className="bg-[#001219]">
          <Footer /> {/* Add style here */}
        </div>
      </div>
    </>
  );
};

export default Landing;
