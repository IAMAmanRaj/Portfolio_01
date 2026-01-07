import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiMousePointer, FiArrowDown } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const textRef = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const introTextRef1 = useRef(null);
  const introTextRef2 = useRef(null);
    const introTextRef3 = useRef(null);
  const JourneyTextRef = useRef(null);

  // Initial loader animation with horizontal split
 useLayoutEffect(() => {
    const landingTimelineDuration = 5.6;

    // HIDE LOADER AND blockDivsS INITIALLY so Landing intro is visible
    gsap.set(".loader", {
      opacity: 0,
      visibility: "hidden"
    });

    gsap.set([".blockDivs-top", ".blockDivs-bottom"], {
      opacity: 0
    });

    // HIDE THE INTRO CONTENT INITIALLY (prevents red flash)
    gsap.set("#intro", {
      opacity: 0
    });
    
    const loaderTl = gsap.timeline({
      delay: landingTimelineDuration,
      defaults: { ease: "power2.inOut" }
    });

    // STEP 0: First set up blockDivss (still invisible)
    loaderTl.set(".blockDivs-top", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)",
      backgroundColor: "#09090b",
    });

    loaderTl.set(".blockDivs-bottom", {
      clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)",
      backgroundColor: "#09090b",
    });

    // STEP 0.5: Show intro content (will be covered by blockDivss)
    loaderTl.set("#intro", {
      opacity: 1
    });

    // STEP 0.6: Now show loader and blockDivss simultaneously
    loaderTl.set(".loader", {
      opacity: 1,
      visibility: "visible",
      backgroundColor: "transparent"
    });

    loaderTl.set([".blockDivs-top", ".blockDivs-bottom"], {
      opacity: 1
    });
    
    // STEP 1: Show the words sliding in
    loaderTl.fromTo(
      ".word h1",
      { y: "-100%" },
      { y: "0%", duration: 1 }
    );

    // STEP 2: Hold the words for a moment
    loaderTl.to(".word h1", {
      duration: 0.8
    });

    // STEP 3: Horizontal divider grows from center
    loaderTl.to(".divider", {
      scaleX: 1,
      duration: 1.2,
      ease: "power2.inOut"
    });

    // STEP 4: Hold divider visible for a moment
    loaderTl.to(".divider", {
      duration: 0.5
    });

    // STEP 5: Words fade out
    loaderTl.to(
      ".word h1",
      { opacity: 0, duration: 0.5 },
      "<"
    );

    // STEP 6: Collapse blockDivss to reveal content (THE SPLIT REVEAL)
    loaderTl.to(".blockDivs-top", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.8,
      ease: "power2.inOut"
    });
    
    loaderTl.to(".blockDivs-bottom", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 1.8,
      ease: "power2.inOut"
    }, "<+=0.4");

    // STEP 7: Fade out divider during collapse
    loaderTl.to(".divider", {
      opacity: 0,
      duration: 1.0
    }, "<");

    // STEP 8: Remove loader AFTER collapse is complete (no fade, just remove)
    loaderTl.set(".loader", {
      display: "none",
      zIndex: -1
    });

    return () => loaderTl.kill();
  }, []);

  // Existing intro text animation (starts after loader)
  useLayoutEffect(() => {
    // Loader takes: 5.6s (landing) + 1s (words in) + 0.8s (hold) + 1.2s (divider) + 0.3s (hold) + 0.5s (fade) + 1.15s (collapse) + 0.3s (remove) = ~10.85s
    const t1 = gsap.timeline({ delay: 10.85 });
    
    t1.fromTo(
      "#intro1",
      { opacity: 0, scale: 1.2 },
      { 
        opacity: 1, 
        scale: 1.0,
        duration: 1, 
        ease: "power2.out"
      }
    ).to("#intro1", { 
      opacity: 0,
      duration: 1,
      delay: 0.5
    }).fromTo("#intro2", { opacity: 0 }, { opacity: 1, duration: 2 })
      .to("#intro2", { opacity: 0, duration: 1 })
      .fromTo("#intro3", { opacity: 0 }, { opacity: 0.8, duration: 8 });

    return () => t1.kill();
  }, []);

  // Existing scroll animations
  useEffect(() => {
    if (introTextRef3.current) {
      gsap.fromTo(
        introTextRef3.current,
        { scale: 1 },
        { 
          scale: 2.0,
          scrollTrigger: {
            trigger: introTextRef3.current,
            start: "top 42%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
      
      gsap.fromTo(
        introTextRef3.current,
        { x: 0 },
        {
          x: "10vw",
          duration: 4,
          ease: "power1.out",
          scrollTrigger: {
            trigger: introTextRef3.current,
            start: "top 45%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 0 },
        {
          y: 70,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 50%",
            end: "bottom 20%",
            scrub: 5,
          },
        }
      );
    }

    if (text2Ref.current) {
      gsap.fromTo(
        text2Ref.current,
        { y: 0 },
        {
          y: 100,
          scrollTrigger: {
            trigger: text2Ref.current,
            start: "top 50%",
            end: "bottom 20%",
            scrub: 5,
          },
        }
      );
    }

    if (text3Ref.current) {
      gsap.fromTo(
        text3Ref.current,
        { y: 0 },
        {
          y: -200,
          scrollTrigger: {
            trigger: text3Ref.current,
            start: "bottom 2%",
            end: "top 50%",
            scrub: 5,
          },
        }
      );
    }

    if (text4Ref.current) {
      gsap.fromTo(
        text4Ref.current,
        { y: 0 },
        {
          y: -50,
          scrollTrigger: {
            trigger: text4Ref.current,
            start: "top 50%",
            end: "top 30%",
            scrub: 5,
          },
        }
      );
    }
  }, []);

  // Existing character animations
  useLayoutEffect(() => {
    gsap.to("#character", {
      opacity: 1,
      stagger: 4.2,
      scrollTrigger: {
        trigger: "#character",
        scrub: 1,
        start: "top 88%",
        end: "top 20%",
      },
    });

    gsap.to("#charactertwo", {
      opacity: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: "#charactertwo",
        scrub: true,
        start: "top 90%",
        end: "top 20%",
      },
    });

    gsap.to("#characterthree", {
      opacity: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: "#characterthree",
        scrub: true,
        start: "top 90%",
        end: "top 20%",
      },
    });

    gsap.to("#characterfour", {
      opacity: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: "#characterfour",
        scrub: true,
        start: "top 90%",
        end: "top 40%",
      },
    });
  }, []);

  return (
    <div className="flex flex-col bg-zinc-950">
      <div className="relative flex justify-center items-center h-screen">
        {/* LOADING SCREEN */}
        <div className="loader z-40">
          {/* Two blockDivss that act as overlay curtains (horizontal split) */}
          <div className="overlay">
            <div className="blockDivs blockDivs-top"></div>  {/* Top blockDivs */}
            <div className="blockDivs blockDivs-bottom"></div>  {/* Bottom blockDivs */}
          </div>

          {/* Words that split apart */}
          <div className="intro-logo text-white">
            <div className="word" id="word-1">
              <h1><span>Let's dive</span></h1>
            </div>
            <div className="word" id="word-2">
              <h1>Into</h1>
            </div>
          </div>

          {/* The horizontal divider line */}
          <div className="divider"></div>
        </div>

        {/* MAIN CONTENT - Hidden underneath */}
        <div
          id="intro"
          ref={JourneyTextRef}
          className="w-full h-screen bg-red-900 absolute flex justify-center items-center text-center self-center z-20"
        >
          <h1
            id="intro1"
            ref={introTextRef1}
            className="text-6xl opacity-0 absolute md:text-5xl lg:text-8xl font-bold text-slate-100 playfair-display transition duration-300"
          >
            My journey
          </h1>
          <h1
            id="intro2"
            ref={introTextRef2}
            className="text-5xl opacity-0 absolute md:text-5xl lg:text-8xl font-bold text-slate-100 playfair-display transition duration-300"
          >
            Till Now
          </h1>
          <motion.div
            id="intro3"
                ref={introTextRef3}
            className="absolute flex flex-col items-center gap-4"
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-8 h-12 border-2 border-slate-300 rounded-full flex justify-center pt-2 shadow-[0_0_15px_rgba(203,213,225,0.3)] hover:shadow-[0_0_25px_rgba(203,213,225,0.5)] transition-shadow duration-500">
                <motion.div
                  className="w-1.5 h-2 bg-slate-300 rounded-full"
                  animate={{
                    y: [0, 12, 0],
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              
              <motion.p
                className="text-sm md:text-base text-slate-300 font-light drop-shadow-[0_0_8px_rgba(203,213,225,0.4)] tracking-widest"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                SCROLL TO EXPLORE
              </motion.p>
              
              <motion.div
                className="drop-shadow-[0_0_6px_rgba(203,213,225,0.5)]"
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <FiArrowDown className="text-2xl text-slate-300" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Rest of the content remains the same */}
      <div className="relative playfair-display h-screen text-[22px] xs:text-xl md:text-3xl lg:text-5xl font-bold text-white mt-0 xs:mt-32 flex justify-center text-center">
        <div id="about" className="relative z-10 w-full" ref={textRef}>
          <p className="flex absolute flex-wrap gap-x-3 mx-auto px-4 xs:px-12 md:px-24 top-[15%] lg:top-[20%]">
            {`"Frontend development hit me like a bolt of lightning. One moment I was looking at a website, the next I was obsessed with understanding how it worked. The rabbit hole went deep, and I couldn't stop digging."`
              .split(" ")
              .map((word, index) => (
                <span id="character" key={index} className="opacity-0">
                  {word.split("").map((character, charIndex) => (
                    <span id="character" key={charIndex} className="opacity-0">
                      {character}
                    </span>
                  ))}
                </span>
              ))}
          </p>

          <p className="absolute top-[15%] lg:top-[20%] flex flex-wrap gap-x-3 opacity-40 mx-auto px-4 xs:px-12 md:px-24">
            {`"Frontend development hit me like a bolt of lightning. One moment I was looking at a website, the next I was obsessed with understanding how it worked. The rabbit hole went deep, and I couldn't stop digging."`
              .split(" ")
              .map((word, index) => (
                <span key={index} className="">
                  {word.split("").map((character, charIndex) => (
                    <span key={charIndex} className="">
                      {character}
                    </span>
                  ))}
                </span>
              ))}
          </p>
        </div>
      </div>

      <div className="relative playfair-display h-screen text-[22px] md:text-3xl lg:text-5xl font-bold text-white mt-22 flex justify-center text-center">
        <div ref={text2Ref} className="relative z-10 w-full">
          <p className="flex absolute flex-wrap justify-center w-full gap-x-3 mx-auto px-4 xs:px-12 md:px-24 top-[2%]">
            {"I live in the space between design and engineering."
              .split(" ")
              .map((word, index) => (
                <span id="charactertwo" key={index} className="opacity-0">
                  {word.split("").map((character, charIndex) => (
                    <span id="charactertwo" key={charIndex} className="opacity-0">
                      {character}
                    </span>
                  ))}
                </span>
              ))}
          </p>

          <p className="absolute flex flex-wrap justify-center w-full gap-x-3 top-[2%] opacity-40 mx-auto px-4 xs:px-12 md:px-24">
            {"I live in the space between design and engineering."
              .split(" ")
              .map((word, index) => (
                <span key={index} className="">
                  {word.split("").map((character, charIndex) => (
                    <span key={charIndex} className="">
                      {character}
                    </span>
                  ))}
                </span>
              ))}
          </p>
        </div>
      </div>

      <div
        ref={text3Ref}
        className="relative playfair-display mx-auto text-[30px] md:text-3xl lg:text-5xl font-bold text-white -mt-60 md:mt-22 mb-12"
      >
        <p className="flex text-center gap-x-3 px-4">
          {"One line at a time.".split(" ").map((word, index) => (
            <span id="characterthree" key={index} className="opacity-0">
              {word.split("").map((character, charIndex) => (
                <span id="characterthree" key={charIndex} className="opacity-0">
                  {character}
                </span>
              ))}
            </span>
          ))}
        </p>

        <p className="absolute top-0 flex text-center gap-x-3 opacity-5 px-4">
          {"One line at a time.".split(" ").map((word, index) => (
            <span key={index} className="">
              {word.split("").map((character, charIndex) => (
                <span key={charIndex} className="">
                  {character}
                </span>
              ))}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;