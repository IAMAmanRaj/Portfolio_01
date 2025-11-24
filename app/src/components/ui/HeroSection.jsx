import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const textRef = useRef(null);
  const bgRef = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const bg2Ref = useRef(null);
  const introTextRef1 = useRef(null);
  const introTextRef2 = useRef(null);
  const introTextRef3 = useRef(null);
  const introTextRef4 = useRef(null);

  const JourneyTextRef = useRef(null);

  useLayoutEffect(() => {
    const t1 = gsap.timeline({ scrub: true }); // Add scrub here
    t1.fromTo(
      "#intro1",
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 8.5 }
    )
      .to("#intro1", { opacity: 0, duration: 1 })
      .fromTo("#intro2", { opacity: 0 }, { opacity: 1, duration: 2 })
      .to("#intro2", { opacity: 0, duration: 1 })
      .fromTo("#intro3", { opacity: 0 }, { opacity: 1, duration: 2 })
      .to("#intro3", { opacity: 0, duration: 1 })
      .fromTo("#intro4", { opacity: 0 }, { opacity: 0.8, duration: 8 });

    return () => t1.kill(); // Kill the timeline when the component unmounts
  }, []);

  useEffect(() => {
    gsap.fromTo(
      JourneyTextRef.current,
      { x: 0 },
      {
        x: 390,
        duration: 5, // Increase the duration
        ease: "power1.out", // Add an easing function
        scrollTrigger: {
          trigger: JourneyTextRef.current,
          start: "top 42%",
          end: "top 42%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { y: 0 },
      {
        y: 70,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 50%",

          end: "bottom 20%",
          scrub: 5, // Increase this value for a smoother effect
        },
      }
    );

    gsap.fromTo(
      bgRef.current,
      { y: 0 },
      {
        y: -100,
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top 50%",

          end: "bottom bottom",
          scrub: 5, // Increase this value for a smoother effect
        },
      }
    );

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

    gsap.fromTo(
      bg2Ref.current,
      { y: 0 },
      {
        y: -100,
        scrollTrigger: {
          trigger: bg2Ref.current,
          start: "top 50%",

          end: "bottom bottom",
          scrub: 5,
        },
      }
    );
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
    gsap.fromTo(
      text4Ref.current,
      { y: 0 },
      {
        y: -70,
        scrollTrigger: {
          trigger: text4Ref.current,
          start: "top 50%",

          end: "top 30%",
          scrub: 5,
        },
      }
    );
  }, []);

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
    <div className="flex flex-col bg-gray-950">
      <div className="relative  flex justify-center items-center h-screen">
        <div
          id="intro"
          ref={JourneyTextRef}
          className="w-full  absolute flex justify-center items-center  text-center self-center "
        >
          <h1
            id="intro1"
            ref={introTextRef1}
            className="text-3xl opacity-0  absolute  md:text-5xl lg:text-8xl font-bold text-slate-100 font-spaceGrotesk transition duration-300"
          >
            My journey
          </h1>
          <h1
            id="intro2"
            ref={introTextRef2}
            className="text-3xl opacity-0 absolute  md:text-5xl lg:text-8xl font-bold text-slate-100 font-spaceGrotesk transition duration-300"
          >
            Till
          </h1>
          <h1
            id="intro3"
            ref={introTextRef3}
            className="text-3xl opacity-0  absolute  md:text-5xl lg:text-8xl font-bold text-slate-100 font-spaceGrotesk transition duration-300"
          >
            Now
          </h1>
          <h1
            id="intro4"
            ref={introTextRef4}
            className="text-3xl opacity-0  absolute  md:text-5xl lg:text-8xl font-bold text-slate-100 font-spaceGrotesk transition duration-300"
          >
            Let's dive in
          </h1>
        </div>
      </div>

      <div className="relative h-screen text-[22px]  xs:text-xl  md:text-3xl lg:text-5xl  font-bold text-white mt-0 xs:mt-32 flex justify-center text-center">
        <div id="about" className="relative z-10 w-full" ref={textRef}>
          <p className="flex absolute flex-wrap gap-x-3 mx-auto  px-4 xs:px-12  md:px-24 top-[15%] lg:top-[20%]  ">
            {"Few years back , I knew nothing about web. It got my attention in the 2nd Academic year of college when I started learning about languages and frameworks used to build websites like this and I was a-m-a-z-e-d."
              .split(" ")
              .map((word, index) => (
                <span id="character" key={index} className="opacity-0">
                  {word.split("").map((character, index) => (
                    <span id="character" key={index} className="opacity-0">
                      {character}
                    </span>
                  ))}
                </span>
              ))}
          </p>

          <p className="absolute top-[15%]   lg:top-[20%] flex flex-wrap gap-x-3 opacity-40 mx-auto px-4 xs:px-12  md:px-24 ">
            {"Few years back , I knew nothing about web. It got my attention in the 2nd Academic year of college when I started learning about languages and frameworks used to build websites like this and I was a-m-a-z-e-d."
              .split(" ")
              .map((word, index) => (
                <span key={index} className="">
                  {word.split("").map((character, index) => (
                    <span key={index} className="">
                      {character}
                    </span>
                  ))}
                </span>
              ))}
          </p>
        </div>
      </div>
      <div className="relative h-screen  text-[22px]  md:text-3xl lg:text-5xl  font-bold text-white mt-32 flex justify-center text-center">
        <div ref={text2Ref} className="relative z-10 w-full">
          <p className="flex absolute flex-wrap gap-x-3 mx-auto  px-4 xs:px-12  md:px-24 top-[2%] ">
            {"Then I started focusing on project based learning as much as I could. I've been making projects and learning things through this journey. As a developer, I feel there's no end to these cool stuffs which excites me even more :)"
              .split(" ")
              .map((word, index) => (
                <span id="charactertwo" key={index} className="opacity-0">
                  {word.split("").map((character, index) => (
                    <span id="charactertwo" key={index} className="opacity-0">
                      {character}
                    </span>
                  ))}
                </span>
              ))}
          </p>

          <p className="absolute  flex flex-wrap gap-x-3 top-[2%] opacity-40 mx-auto px-4 xs:px-12  md:px-24">
            {"Then I started focusing on project based learning as much as I could. I've been making projects and learning things through this journey. As a developer, I feel there's no end to these cool stuffs which excites me even more :)"
              .split(" ")
              .map((word, index) => (
                <span key={index} className="">
                  {word.split("").map((character, index) => (
                    <span key={index} className="">
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
        className="relative mx-auto text-[22px]  xs:text-xl  md:text-3xl lg:text-5xl  font-bold text-white mt-40"
      >
        <p className="flex text-center gap-x-3 px-4 ">
          {"I've never stopped since then".split(" ").map((word, index) => (
            <span id="characterthree" key={index} className="opacity-0">
              {word.split("").map((character, index) => (
                <span id="characterthree" key={index} className="opacity-0">
                  {character}
                </span>
              ))}
            </span>
          ))}
        </p>

        <p className="absolute top-0 flex text-center gap-x-3 opacity-5 px-4">
          {"I've never stopped since then".split(" ").map((word, index) => (
            <span key={index} className="">
              {word.split("").map((character, index) => (
                <span key={index} className="">
                  {character}
                </span>
              ))}
            </span>
          ))}
        </p>
      </div>

      <div className="relative flex flex-col justify-end items-center ">
        <BackgroundGradientAnimation />
        <div className=" absolute ">
          <div
            ref={text4Ref}
            className="relative mb-4 text-md sm:text-lg xs:text-xl  md:text-3xl lg:text-5xl flex justify-center text-center  font-bold text-slate-300 "
          >
            <p className="flex flex-wrap gap-x-3 px-8 w-full  ">
              {"#Never stop learning.".split(" ").map((word, index) => (
                <span id="characterfour" key={index} className="opacity-0">
                  {word.split("").map((character, index) => (
                    <span id="characterfour" key={index} className="opacity-0">
                      {character}
                    </span>
                  ))}
                </span>
              ))}
            </p>

            <p className="absolute top-0 flex flex-wrap gap-x-3 w-full  px-8 opacity-5">
              {"#Never stop learning.".split(" ").map((word, index) => (
                <span key={index} className="">
                  {word.split("").map((character, index) => (
                    <span key={index} className="">
                      {character}
                    </span>
                  ))}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
