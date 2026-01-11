const TimelineItem = ({ item, tickRef, textRef, hrRef, isLast, checkpointRef }) => {
  const isStart = item.position === "start";

  return (
    <li>
      <div className="timeline-middle" ref={tickRef} >
        <div className="ripple-checkpoint" ref={checkpointRef}>
          <div className="ripple-circle ripple-1"></div>
          <div className="ripple-circle ripple-2"></div>
          <div className="ripple-circle ripple-3"></div>
        </div>
      </div>
      <div
        ref={textRef}
         className={`pb-12 text-gray-100 pl-5 md:pl-0 ${
          isStart
            ? "timeline-start md:text-end md:mr-3"
            : "timeline-end mb-10 md:ml-3"
        }`}
      >
        <time className={`font-mono italic ${item.id === 10 ? 'font-bold' : ''}`}>
          {item.time}
        </time>
        <div className="text-lg text-gray-100  font-black">{item.title}</div>
        <span className="text-gray-100">
          {item.content}
        </span>
      </div>
      {!isLast && <hr ref={hrRef} className="z-[-4]" />}
    </li>
  );
};

export default TimelineItem;