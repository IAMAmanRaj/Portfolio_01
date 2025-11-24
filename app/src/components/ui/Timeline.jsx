import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const tickRef1 = useRef(null);
  const textRef1 = useRef(null);
  const tickRef2 = useRef(null);
  const textRef2 = useRef(null);
  const tickRef3 = useRef(null);
  const textRef3 = useRef(null);
  const tickRef4 = useRef(null);
  const textRef4 = useRef(null);
  const tickRef5 = useRef(null);
  const textRef5 = useRef(null);
  const tickRef6 = useRef(null);
  const textRef6 = useRef(null);
  const tickRef7 = useRef(null);
  const textRef7 = useRef(null);
  const tickRef8 = useRef(null);
  const textRef8 = useRef(null);
  const tickRef9 = useRef(null);
   const textRef9 = useRef(null);
  const tickRef10 = useRef(null);
 
   const textRef10 = useRef(null);
  const hrRef1 = useRef(null);
  const hrRef2 = useRef(null);
  const hrRef3 = useRef(null);
  const hrRef4 = useRef(null);
  const hrRef5 = useRef(null);
  const hrRef6 = useRef(null);
  const hrRef7 = useRef(null);
  const hrRef8 = useRef(null);
  const hrRef9 = useRef(null);
  const hrRef10 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      tickRef1.current,
      {
        scale: 1,
      },
      {
        fill: "#A5D8FF",
        scale: 2,
        scrollTrigger: {
          trigger: tickRef1.current,
          start: "top 70%",
          end: "top 66%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      textRef1.current,
      {
        color: "currentColor",
        opacity: 0,
      },
      {
        color: "#A5D8FF",
        opacity: 1,
        scrollTrigger: {
          trigger: textRef1.current,
          start: "top 70%",
          end: "top 66%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      hrRef1.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        backgroundColor: "#222E50",
        scrollTrigger: {
          trigger: hrRef1.current,
          start: "top 70%",
          end: "top 66%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      tickRef2.current,
      {
        scale: 1,
      },
      {
        fill: "#A5D8FF",
        scale: 2,
        scrollTrigger: {
          trigger: tickRef2.current,
          start: "top 64%",
          end: "top 60%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      textRef2.current,
      {
        color: "currentColor",
        opacity: 0,
      },
      {
        color: "#A5D8FF",
        opacity: 1,
        scrollTrigger: {
          trigger: textRef2.current,
          start: "top 64%",
          end: "top 60%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      hrRef2.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        backgroundColor: "#222E50",
        scrollTrigger: {
          trigger: hrRef2.current,
          start: "top 64%",
          end: "top 60%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      tickRef3.current,
      {
        scale: 1,
      },
      {
        fill: "#A5D8FF",
        scale: 2,
        scrollTrigger: {
          trigger: tickRef3.current,
          start: "top 60%",
          end: "top 56%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      textRef3.current,
      {
        color: "currentColor",
        opacity: 0,
      },
      {
        color: "#A5D8FF",
        opacity: 1,
        scrollTrigger: {
          trigger: textRef3.current,
          start: "top 60%",
          end: "top 56%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      hrRef3.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        backgroundColor: "#222E50",
        scrollTrigger: {
          trigger: hrRef3.current,
          start: "top 60%",
          end: "top 56%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      tickRef4.current,
      {
        scale: 1,
      },
      {
        fill: "#A5D8FF",
        scale: 2,
        scrollTrigger: {
          trigger: tickRef4.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      textRef4.current,
      {
        color: "currentColor",
        opacity: 0,
      },
      {
        color: "#A5D8FF",
        opacity: 1,
        scrollTrigger: {
          trigger: textRef4.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      hrRef4.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        backgroundColor: "#222E50",
        scrollTrigger: {
          trigger: hrRef4.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      tickRef5.current,
      {
        scale: 1,
      },
      {
        fill: "#A5D8FF",
        scale: 2,
        scrollTrigger: {
          trigger: tickRef5.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      textRef5.current,
      {
        color: "currentColor",
        opacity: 0,
      },
      {
        color: "#A5D8FF",
        opacity: 1,
        scrollTrigger: {
          trigger: textRef5.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      hrRef5.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        backgroundColor: "#222E50",
        scrollTrigger: {
          trigger: hrRef5.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      tickRef6.current,
      {
        scale: 1,
      },
      {
        fill: "#A5D8FF",
        scale: 2,
        scrollTrigger: {
          trigger: tickRef6.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      textRef6.current,
      {
        color: "currentColor",
        opacity: 0,
      },
      {
        color: "#A5D8FF",
        opacity: 1,
        scrollTrigger: {
          trigger: textRef6.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      hrRef6.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        backgroundColor: "#222E50",
        scrollTrigger: {
          trigger: hrRef6.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      tickRef7.current,
      {
        scale: 1,
      },
      {
        fill: "#A5D8FF",
        scale: 2,
        scrollTrigger: {
          trigger: tickRef7.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      textRef7.current,
      {
        color: "currentColor",
        opacity: 0,
      },
      {
        color: "#A5D8FF",
        opacity: 1,
        scrollTrigger: {
          trigger: textRef7.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      hrRef7.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        backgroundColor: "#222E50",
        scrollTrigger: {
          trigger: hrRef7.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      tickRef8.current,
      {
        scale: 1,
      },
      {
        fill: "#A5D8FF",
        scale: 2,
        scrollTrigger: {
          trigger: tickRef8.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      textRef8.current,
      {
        color: "currentColor",
        opacity: 0,
      },
      {
        color: "#A5D8FF",
        opacity: 1,
        scrollTrigger: {
          trigger: textRef8.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      hrRef8.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        backgroundColor: "#222E50",
        scrollTrigger: {
          trigger: hrRef8.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      tickRef9.current,
      {
        scale: 1,
      },
      {
        fill: "#A5D8FF",
        scale: 2,
        scrollTrigger: {
          trigger: tickRef9.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      textRef9.current,
      {
        color: "currentColor",
        opacity: 0,
      },
      {
        color: "#A5D8FF",
        opacity: 1,
        scrollTrigger: {
          trigger: textRef9.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      hrRef9.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        backgroundColor: "#222E50",
        scrollTrigger: {
          trigger: hrRef9.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
     gsap.fromTo(
      tickRef10.current,
      {
        scale: 1,
      },
      {
        fill: "#A5D8FF",
        scale: 2,
        scrollTrigger: {
          trigger: tickRef10.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      textRef10.current,
      {
        color: "currentColor",
        opacity: 0,
      },
      {
        color: "#A5D8FF",
        opacity: 1,
        scrollTrigger: {
          trigger: textRef10.current,
          markers : true ,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      hrRef10.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        backgroundColor: "#222E50",
        scrollTrigger: {
          trigger: hrRef8.current,
          start: "top 55%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div>
      <ul className="timeline bg-gray-950 z-[3] py-12 px-2 lg:px-24 timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle" ref={tickRef1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-5 w-5 text-current"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            ref={textRef1}
            className="timeline-start  md:text-end pb-12 text-current pl-8 md:pl-0 md:mr-3"
          >
            <time className="font-mono italic ">Early 2023</time>
            <div className="text-lg font-black">The Initial Phase</div>
            After learning the basics of HTML, CSS, JS and Bootstrap from a
            Udemy Course, I started with React through youtube. At first,
            nothing was clear to me, I had 0 idea about how does a
            state changes or how does a component works. It took time, for me to
            get comfortable with these things and to be familiar with the syntax
            which seemed scary at first.
          </div>
          <hr ref={hrRef1} className="z-[-4]" />
        </li>
        <li>
          <div className="timeline-middle " ref={tickRef2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            ref={textRef2}
            className="timeline-end pb-12 text-current pl-8 md:pl-0 md:ml-3 "
          >
            <time className="font-mono italic ">Summers , 2023</time>
            <div className="text-lg font-black">The build up</div>I started deep diving into fundamentals.
          </div>
          <hr ref={hrRef2} className="z-[-4]" />
        </li>
        <li>
          <div className="timeline-middle" ref={tickRef3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            ref={textRef3}
            className="timeline-start pl-8  md:pl-0 text-current md:text-end pb-12 md:mr-3"
          >
            <time className="font-mono italic ">Winters , 2023</time>
            <div className="text-lg font-black">Diving into Projects</div>
I started working on team projects and hackathons early in college — one of the best decisions I made. It opened my eyes to the limitless scope of design and creativity. In November, my team participated in <span className="hover:cursor-pointer text-blue-500 font-bold text-xl">Webster</span>, an annual hackathon with <span className="hover:cursor-pointer text-blue-500 font-extrabold text-xl">100+ </span> teams. Though we didn’t reach the finals, the experience pushed me to sharpen my skills and come back stronger.

          </div>
          <hr ref={hrRef3} className="z-[-4]" />
        </li>
        <li>
          <div className="timeline-middle" ref={tickRef4}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            ref={textRef4}
            className="timeline-end pl-8 text-current md:pl-0 mb-10 md:ml-3"
          >
            <time className="font-mono italic ">2024</time>
           <div className="text-lg font-black">The Year of My Life</div>
This year, I pushed myself to build full stack projects after mastering the basics with vanilla JS. I developed an authentication app and a blogging platform using the MERN stack, implementing Google Login with Firebase. Along the way, I explored UI libraries like Flowbite and Material UI, strengthened my backend skills with MongoDB and Mongoose, and learned to deploy apps on Render and Vercel.

          </div>
          <hr ref={hrRef4} className="z-[-4]" />
        </li>
        <li>
          <div className="timeline-middle" ref={tickRef5}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            ref={textRef5}
            className="timeline-start pl-8  md:pl-0 text-current md:text-end pb-12 md:mr-3"
          >
            <time className="font-mono italic ">March, 2024</time>
           <div className="text-lg font-black">Things Started Getting Serious!</div>
In March, I worked on our college’s Fest Website, which saw thousands of registrations and taught me the value of scalable backend code and polished UI. Later, my team won 2nd place at Innodev '24 for an event management app and was shortlisted among 200+ teams for Hack 36, a 36-hour hackathon. These experiences deepened my exposure to diverse tech stacks and advanced web technologies.

          </div>
          <hr ref={hrRef5} className="z-[-4]" />
        </li>
        <li>
  <div className="timeline-middle" ref={tickRef6}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <div
    ref={textRef6}
    className="timeline-end pl-8 text-current md:pl-0 mb-10 md:ml-3"
  >
    <time className="font-mono italic ">April, 2024</time>
    <div className="text-lg font-black">Internship at <span className="hover:cursor-pointer bg-gradient-to-r from-[#007AFF] via-[100%] via-[#EBFE54] to-[#EBFE54] bg-clip-text text-transparent font-bold text-3xl">CREW™ </span>  </div>On <span className="hover:cursor-pointer text-blue-500 font-bold text-xl">April 13th</span>, I received an off-campus internship offer from CREW™, https://crewtm.com. Got familiar with animation libraries like Framer Motion and <span className="hover:cursor-pointer text-500 font-bold text-md text-[#0ebe4c]">GSAP</span>. Started Networking more and more!</div>
  <hr ref={hrRef6} className="z-[-4]" />
</li>
<li>
  <div className="timeline-middle" ref={tickRef7}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <div
    ref={textRef7}
    className="timeline-start pl-8 md:pl-0 text-current md:text-end pb-12 md:mr-3"
  >
    <time className="font-mono italic ">Summers, 2024</time>
    <div className="text-lg font-black">Worked on Industry level Projects</div>In Summers, I got an opportunity from <span className="bg-gradient-to-r from-[#812e2e] via-[20%] via-[#971313] to-[#e43535] bg-clip-text text-transparent font-bold text-3xl">Medino's</span> ( https://www.medinos.in ) for the Full Stack Developer role. Along with CREW™, I worked here on making the Frontend of this Quick Commerce Medicine Delivery Application, that was involving a complex database schema with dashboard sections for pharmacy, retailer, admin, and a general user interface and app layout. This project introduced me to NestJS as a dedicated Backend Framework, Next.js for frontend, and tools like Prisma, Supabase, and eventually PostgreSQL. I learnt how to write optimized code and got comfortable with Typescript.I was focusing on writing readable & reusable code with the optimized usage of components. Here was the point when I started improving as a software developer.</div>
  <hr ref={hrRef7} className="z-[-4]" />
</li>
<li>
 <div className="timeline-middle" ref={tickRef8}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className="h-5 w-5"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
</div>
<div
  ref={textRef8}
  className="timeline-end pl-8 text-current md:pl-0 mb-10 md:ml-3"
>
  <time className="font-mono italic ">Later, 2024</time>
  <div className="text-lg font-black">Launched Websites and a Client Project</div>
  In September, we successfully launched two major projects at <span className="hover:cursor-pointer text-blue-500 font-bold text-xl">CREW™</span>, the first major version of the website  
  <a href="http://www.crewtm.com" className="text-blue-500"> www.crewtm.com </a> 
  and another one for its parent company <span className="hover:cursor-pointer text-blue-500 font-bold text-xl">SKDIV®</span>, 
  <a href="http://www.skdiv.com" className="text-blue-500 "> www.skdiv.com </a>. 
  Additionally, we completed a client project for an Australian business, delivering the <span className="bg-gradient-to-r from-[#8f5b27] via-[100%] via-[#bc8b04] to-[#f4a507] bg-clip-text text-transparent font-bold text-xl">True Cut Barber Studio</span>  website 
  <a href="http://truecutbarberstudio.com.au" className="text-blue-500 hover:cursor-pointerx"> truecutbarberstudio.com.au </a> 
  in less than a month. This project introduced me to SEO optimization, including tools like Google Search Console, and taught me the importance of sitemaps, robots.txt files, and monitoring impressions and clicks for better visibility in search results.
</div>
<hr ref={hrRef8} className="z-[-4]" />
</li>
<li>
  <div className="timeline-middle" ref={tickRef9}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <div
    ref={textRef9}
    className="timeline-start pl-8 md:pl-0 text-current md:text-end pb-12 md:mr-3"
  >
    <time className="font-mono italic ">Winters, 2024</time>
   <div className="text-lg font-black">Web Lead, Culrav-Avishkar</div>
In October, I got the opportunity for leading the Web Team for Culrav-Avishkar, MNNIT’s annual Techno-Cultural Fest. Guiding the juniors and collaborating with them taught me valuable lessons in leadership, teamwork, along with project delivery and management. Despite challenges, we successfully launched the website on time, achieving <span className="hover:cursor-pointer text-blue-500 font-bold text-xl">5.3K+</span> Google search appearances within the first week. These experiences in 2024 greatly enhanced my technical and professional growth.
</div>
  <hr ref={hrRef9} className="z-[-4]" />
</li>

<li>
  <div className="timeline-middle text-current md:pl-0 mb-10 md:ml-3" ref={tickRef10}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <div
    ref={textRef10}
    className="timeline-end pl-8 text-current md:pl-0 mb-10 md:ml-3"
  >
    <time className="font-mono italic font-bold">2025, Chapter ONE</time>
    <div className="text-lg font-black">Company and Personal Projects </div> In February, I started working on<span className="hover:cursor-pointer bg-gradient-to-r from-[#4d01bf] via-[100%] via-[#4c018e] to-[#fefefe] bg-clip-text text-transparent font-bold text-3xl"> IRYS™</span>a smart AI-driven productivity tool that offers numerous features to organize your tasks, schedules and also has interactive pomodoro sessions for focused work. After this, I took up the idea of building my own idea of<span className="hover:cursor-pointer bg-gradient-to-r from-emerald-900 via-[100%] via-emerald-500 to-[#fefefe] bg-clip-text text-transparent font-bold text-3xl"> Comegle</span>, omegle but for colleges that allows students to connect through video chat, join interest communities, and network with verified students across India.</div>
 
</li>
      </ul>
    </div>
  );
};

export default Timeline;
