import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import TimelineItem from "./TimelineItem.jsx";
import { timelineItems } from "../../../constants/Timeline/timelineData.jsx";
import { useTimelineAnimations } from "./hooks/useTimelineAnimations.js";
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  // Create refs array at top level - one time initialization
  const refs = useRef(
    timelineItems.map(() => ({
      tickRef: { current: null },
      textRef: { current: null },
      hrRef: { current: null },
    }))
  ).current;

  useTimelineAnimations(timelineItems, refs);

  return (
    <div>
      <ul className="timeline bg-zinc-950 z-[3] py-12 px-3 lg:px-24 timeline-snap-icon max-md:timeline-compact timeline-vertical">
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
