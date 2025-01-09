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
  const hrRef1 = useRef(null);
  const hrRef2 = useRef(null);
  const hrRef3 = useRef(null);
  const hrRef4 = useRef(null);
  const hrRef5 = useRef(null);
  const hrRef6 = useRef(null);
  const hrRef7 = useRef(null);
  const hrRef8 = useRef(null);
  const hrRef9 = useRef(null);

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
            nothing was clear to me, I had literally no idea about how does a
            state changes or how does a component works. It took time, for me to
            get comfortable with these things and to be familiar with the syntax
            which seemed scary at that time tbh.
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
            <div className="text-lg font-black">The build up</div>I soon
            realised that I need to strengthen my concepts. I didn't take JS
            that seriously when I started webD, and it kinda backfired. So, I
            started paying more attention to the core things of web
            Developement. I started learning about how JS and React works behind
            the scenes. It opened up my mind for real.
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
            <div className="text-lg font-black">Diving into Projects</div>I
            started working on projects more seriously by taking part in
            hackathon. It was surely a competitive thing but it was fun. I got
            to see there's no limit to design and creativity. You can just
            create anything and everything. Later on in November, my team took part in <span className="hover:cursor-pointer text-blue-500 font-bold text-xl">Webster</span>, an annual hackathon that has <span className="hover:cursor-pointer text-blue-500 font-extrabold text-xl">100+ </span> participating teams and only few get shortlisted for the final evaluation. We gave it all but unfortunately, we couldn't make it to the final round. But, it was a great learning experience. This, motivated me to become better at my skills and comeback stronger next time !
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
            <div className="text-lg font-black">The year of my life</div>I am
            still learning and growing every single day. This year, I challenged
            myself to take on full stack projects, turning each day into an
            adventure. At the beginning of 2024, I challenged myself to dive into full-stack development projects. I built an authentication application and a blogging platform using the MERN stack and also implemented Google Login from scratch using Firebase. During this phase, I explored libraries like Flowbite and Material UI while deepening my understanding of CRUD operations and regular expressions using MongoDB, Mongoose. I also learned to host web applications using platforms like Render and Vercel.
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
            <div className="text-lg font-black">Things started getting serious !</div>In March, I got the opportunity to contribute to the annual Fest Website which gathered over 2000 registrations within a week and learn a lot about scalability and got to know the importance of Design in a Website. Later on,  I also participated in Innodev '24 under the Avishkar Event, my college's annual tech fest, where my team secured 2nd place for building an event management Web application. The project helped me refine my skills in building a full-stack application and creating responsive UI designs. Shortly after this event, my Team was also shortlisted among 200+ teams for the offline rounds of Hack 36, a 36-hour annual hackathon. This experience exposed me to diverse tech stacks and advanced web technologies, significantly broadening my knowledge about the domain.
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
    <div className="text-lg font-black">Internship at <span className="hover:cursor-pointer bg-gradient-to-r from-[#007AFF] via-[100%] via-[#EBFE54] to-[#EBFE54] bg-clip-text text-transparent font-bold text-3xl">Crew !</span>  </div>On <span className="hover:cursor-pointer text-blue-500 font-bold text-xl">April 13th</span>, I received an off-campus internship offer from Crew, marking the beginning of an exciting journey. I was ready to apply my knowledge and experience along with the qualities that I developed while participating as a team in various Hackathons. I got to work on animations and <span className="hover:cursor-pointer text-blue-500 font-bold text-md">FIGMA</span>. I started interacting more and more with other talented designers and developers along the way and started enjoying the things even more !</div>
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
    <div className="text-lg font-black">Worked on Industry level Projects</div>In Summers, I worked on <span className="bg-gradient-to-r from-[#812e2e] via-[20%] via-[#971313] to-[#e43535] bg-clip-text text-transparent font-bold text-3xl">Medino's</span> , a Quick Commerce Medicine Delivery Application, involving a complex database schema with dashboard sections for pharmacy, retailer, admin, and a general user interface and app layout. This project introduced me to NestJS as a dedicated Backend Framework, Next.js for frontend, and tools like Prisma, Supabase, and eventually PostgreSQL. It enhanced my understanding of scalable backend structures with complex schema and modern web technologies. I also kept learning a lot of Good developer practices along the way as I was working in Crew. I learnt how to write optimized code and got comfortable with Typescript. I had to follow all the industry standards and make the code readable and reusable at the same time. Here was the point when I started improving as a developer.</div>
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
  In September, we successfully launched two major projects at <span className="hover:cursor-pointer text-blue-500 font-bold text-xl">CREW </span>, the first major version of the website  
  <a href="http://www.crewtm.com" className="text-blue-500"> www.crewtm.com </a> 
  and another one for its parent company <span className="hover:cursor-pointer text-blue-500 font-bold text-xl">SKDIV</span>, 
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
    <div className="text-lg font-black">Web Lead, Culrav-Avishkar </div> In October, I became the Web Lead of Culrav-Avishkar, annual Techno-Cultural Fest of MNNIT. Leading the team was a valuable learning experience in leadership, teamwork, and project management. I interacted with a lot of talented juniors who were eager to learn and grow together in the process. It was a month long project and we encountered several challenges but by overcoming all of them successively,  We managed to successfully deploy the website within the deadline by the first week of November, achieving <span className="hover:cursor-pointer text-blue-500 font-bold text-xl">5.3K+</span>  Google search appearances during the Fest after the first week of its launch. These experiences in 2024 have helped me grow significantly, both technically and professionally, preparing me to take on even greater challenges in the future.</div>
  <hr ref={hrRef9} className="z-[-4]" />
</li>
      </ul>
    </div>
  );
};

export default Timeline;
