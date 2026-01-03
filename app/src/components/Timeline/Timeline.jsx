import React, { useRef, useMemo } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { timelineItems } from "../../constants/Timeline/timelineData.jsx";
import TimelineItem from "./TimelineItem.jsx";
import { useTimelineAnimations } from "../../hooks/useTimelineAnimations.js";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const refs = useMemo(
    () =>
      timelineItems.map(() => ({
        tickRef: useRef(null),
        textRef: useRef(null),
        hrRef: useRef(null),
      })),
    []
  );

  useTimelineAnimations(timelineItems, refs);

  return (
    <div>
      <ul className="timeline bg-gray-950 z-[3] py-12 px-2 lg:px-24 timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            tickRef={refs[index].tickRef}
            textRef={refs[index].textRef}
            hrRef={refs[index].hrRef}
            isLast={index === timelineItems.length - 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
