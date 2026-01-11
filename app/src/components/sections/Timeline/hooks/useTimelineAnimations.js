import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useTimelineAnimations = (items, refs) => {
  useEffect(() => {
    const animations = [];

    items.forEach((item, index) => {
      const { tickRef, textRef, hrRef, checkpointRef } = refs[index];
      const { scrollTrigger } = item;

      // Animate ripple checkpoint container
      const tickAnim = gsap.fromTo(
        tickRef.current,
        {
          scale: 1,
          opacity: 0.5,
        },
        {
          scale: 1.4,
          opacity: 1,
          scrollTrigger: {
            trigger: tickRef.current,
            start: scrollTrigger.start,
            end: scrollTrigger.end,
            scrub: 2,
          },
        }
      );
      animations.push(tickAnim);

      // Animate checkpoint (ripple) opacity in sync
      if (checkpointRef.current) {
        const checkpointAnim = gsap.fromTo(
          checkpointRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: checkpointRef.current,
              start: scrollTrigger.start,
              end: scrollTrigger.end,
              scrub: 2,
            },
          }
        );
        animations.push(checkpointAnim);
      }

      // Animate text
      const textAnim = gsap.fromTo(
        textRef.current,
        {
          color: "#A5D8FF",
          opacity: 0,
        },
        {
          color: "#A5D8FF",
          opacity: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: scrollTrigger.start,
            end: scrollTrigger.end,
            scrub: 2,
          },
        }
      );
      animations.push(textAnim);

      // Animate hr (if not last item)
      if (hrRef.current) {
        const hrAnim = gsap.fromTo(
          hrRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            backgroundColor: "#222E50",
            scrollTrigger: {
              trigger: hrRef.current,
              start: scrollTrigger.start,
              end: scrollTrigger.end,
              scrub: 2,
            },
          }
        );
        animations.push(hrAnim);
      }
    });

    // Cleanup function
    return () => {
      animations.forEach((anim) => {
        anim.kill();
      });
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []); // Empty array - only run once on mount
};
