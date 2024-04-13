import React, { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';



export const ShiftingDropDown = () => {
  return (
    <div className="">
    <div className="flex h-12 items-center z-[60]   absolute w-full justify-center  mt-0  text-neutral-200 ">
      <Tabs />
    </div>
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="fixed top-[desired value] opacity-95 bg-zinc-950 rounded-full border-2 p-1 vxs:p-2 mt-4 flex h-fit gap-0 vxs:gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
            
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content className="" dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-6  top-[calc(100%_+_24px)] w-56 xs:w-56 sm:w-80  lg:w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const About = () => {
  return (
    <div>
      <div className="flex gap-8 sm:gap-16 flex-col sm:flex-row">
        <div>
          <h3 className="mb-2 text-sm font-medium">Interests</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Full Stack Web Developement
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Animation and web designing
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Hobbies</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Singing
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Chess
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Volleyball
          </a>
        </div>
      
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>About me</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const More = () => {
  return (
    <div className="grid left-1/2 grid-cols-3 gap-4">
      <Link
        to="/"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiHome className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Home</span>
      </Link>
      <ScrollLink
      to="skills"
  spy={true}
  smooth={true}
  offset={-70}
  duration={1}
        className="flex w-full flex-col items-center justify-center hover:cursor-pointer py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Skills</span>
      </ScrollLink>
      <ScrollLink
  to="timeline"
  spy={true}
  smooth={true}
  offset={-70}
  duration={1}
  className="flex hover:cursor-pointer w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
>
  <FiPieChart className="mb-2 text-xl text-indigo-300" />
  <span className="text-xs">Timeline </span>
</ScrollLink>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="https://innodev-24-3.onrender.com">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/images/EventManagement.png"
            alt="EventManagementWebsiteImage"
          />
          <h4 className="mb-0.5 text-sm font-medium">Event Management Website[Live link]</h4>
          <p className="text-xs text-neutral-400">
           An End-to-End Event Management Website with plethora of features.
          </p>
        </a>
        <a href="https://blog-app-irma.onrender.com">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/images/BlogApp.png"
            alt="mern blog website image"
          />
          <h4 className="mb-0.5 text-sm font-medium">My own Personal Blog App[Live link]</h4>
          <p className="text-xs text-neutral-400">
            A MERN stack blog application to share my thoughts and experiences along with this journey
          </p>
        </a>
        <a href="https://github.com/IAMAmanRaj/WebSter-23-Forked">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/images/MessManagementPortal.png"
            alt="mess management portal website image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Mess Management Website</h4>
          <p className="text-xs text-neutral-400">
            A hackathon Project. A full stack Mess management portal for college students.
          </p>
        </a>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <ScrollLink to="projects"
  spy={true}
  smooth={true}
  offset={-100}
  duration={1}
        ><span>View more</span></ScrollLink>
        
        <FiArrowRight />
      </button>
    </div>
  );
};

const TABS = [
  {
    title: "About me",
    Component: About,
  },
  {
    title: "More",
    Component: More,
  },
  {
    title: "Projects",
    Component: Projects,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));