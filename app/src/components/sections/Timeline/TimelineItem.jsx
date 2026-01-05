const TimelineItem = ({ item, tickRef, textRef, hrRef, isLast }) => {
  const isStart = item.position === "start";

  return (
    <li>
      <div className="timeline-middle" ref={tickRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="h-3 w-3 -mt-1 md:h-4 md:w-4 text-current"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        ref={textRef}
         className={`pb-12 text-current pl-5 md:pl-0 ${
          isStart
            ? "timeline-start md:text-end md:mr-3"
            : "timeline-end mb-10 md:ml-3"
        }`}
      >
        <time className={`font-mono italic ${item.id === 10 ? 'font-bold' : ''}`}>
          {item.time}
        </time>
        <div className="text-lg  font-black">{item.title}</div>
        {item.content}
      </div>
      {!isLast && <hr ref={hrRef} className="z-[-4]" />}
    </li>
  );
};

export default TimelineItem;
