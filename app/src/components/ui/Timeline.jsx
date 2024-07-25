import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

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
        scale: 1, // Initial scale
      },
      {
        fill: "#A5D8FF", // New fill color
        scale: 2, // New scale

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
        color: "currentColor", // Initial fill color

        opacity: 0, // Initial opacity
      },
      {
        color: "#A5D8FF", // New fill color

        opacity: 1, // New opacity
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
        opacity: 0, // Initial background color
      },
      {
        opacity: 1,
        backgroundColor: "#222E50", // New background color
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
        scale: 1, // Initial scale
      },
      {
        fill: "#A5D8FF", // New fill color
        scale: 2, // New scale

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
        color: "currentColor", // Initial fill color

        opacity: 0, // Initial opacity
      },
      {
        color: "#A5D8FF", // New fill color

        opacity: 1, // New opacity
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
        opacity: 0, // Initial background color
      },
      {
        opacity: 1,
        backgroundColor: "#222E50", // New background color
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
        scale: 1, // Initial scale
      },
      {
        fill: "#A5D8FF", // New fill color
        scale: 2, // New scale

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
        color: "currentColor", // Initial fill color

        opacity: 0, // Initial opacity
      },
      {
        color: "#A5D8FF", // New fill color

        opacity: 1, // New opacity
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
        opacity: 0, // Initial background color
      },
      {
        opacity: 1,
        backgroundColor: "#222E50", // New background color
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
        scale: 1, // Initial scale
      },
      {
        fill: "#A5D8FF", // New fill color
        scale: 2, // New scale

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
        color: "currentColor", // Initial fill color

        opacity: 0, // Initial opacity
      },
      {
        color: "#A5D8FF", // New fill color

        opacity: 1, // New opacity
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
        opacity: 0, // Initial background color
      },
      {
        opacity: 1,
        backgroundColor: "#222E50", // New background color
        scrollTrigger: {
          trigger: hrRef4.current,
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
        <li className="">
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
            create anything and everything.
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
            adventure. In just a month, I dove deep into backend development.
            Working with the Web Team of Culrav-Avishkar'24, I uncovered the
            secrets of scalability and the art of web design. March brought an
            exciting victory as I clinched #2 at Innodev '24, an annual
            hackathon. April marked a new chapter with an internship at Crew,
            where I continue to thrive. Along the way, I’ve embraced new
            technologies like NestJS and ORMs like Prisma. The future is a
            mystery, but I'm diving in headfirst, eager for whatever comes next!
          </div>
          <hr ref={hrRef4} className="z-[-4]" />
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
