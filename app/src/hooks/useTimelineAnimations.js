import { useEffect } from "react";
import { gsap } from "gsap";

export const useTimelineAnimations = (items, refs) => {
  useEffect(() => {
    items.forEach((item, index) => {
      const { tickRef, textRef, hrRef } = refs[index];
      const { scrollTrigger } = item;

      // Animate tick
      gsap.fromTo(
        tickRef.current,
        {
          scale: 1,
        },
        {
          fill: "#A5D8FF",
          scale: 2,
          scrollTrigger: {
            trigger: tickRef.current,
            start: scrollTrigger.start,
            end: scrollTrigger.end,
            scrub: 2,
          },
        }
      );

      // Animate text
      gsap.fromTo(
        textRef.current,
        {
          color: "currentColor",
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

      // Animate hr (if not last item)
      if (hrRef.current) {
        gsap.fromTo(
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
      }
    });
  }, [items, refs]);
};
