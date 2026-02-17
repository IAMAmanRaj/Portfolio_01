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
import { Link as ScrollLink } from "react-scroll";
import { IoIosLink } from "react-icons/io";

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
      className="fixed top-[4px] md:top-[8px] opacity-95 bg-[#001219] rounded-full border-2 p-1 vxs:p-2 mt-4 flex h-fit gap-0 vxs:gap-2"
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
        className={`transition-transform mt-1 ${
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
      className="absolute left-6  top-[calc(100%_+_24px)] w-72 xs:w-56 sm:w-80  lg:w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4 pb-2 xs:pb-4"
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
         Frontend Engineering
          </a>
           <a href="#" className="mb-1 block text-sm text-neutral-400">
         Web Optimization
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
         UI/UX & Animations
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Hobbies</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Music & Singing
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Chess
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={2000}
        >
          <span>More about me</span>
        </ScrollLink>
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
        offset={-30}
        duration={2000}
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
        duration={2000}
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
        <a href="https://truecutbarberstudio.com.au/">
          <img
            className="mb-2 h-30 w-full rounded object-contain"
            src="/images/tcbs.png"
            alt="true cut barber studio website"
          />
          <h4 className="mb-0.5 flex flex-row items-center gap-1 text-sm font-medium">
            True Cut Barber Studio<IoIosLink />
          </h4>
          <p className="text-xs text-neutral-400">
           This website is for Sydney's Top Barber Studio Business, TCBS Australia. My first foreign client interaction. 
          </p>
        </a>
        
        <a href="https://crewtm.com/">
          <img
            className="mb-2 h-30 w-full rounded object-contain"
            src="/images/crew.png"
            alt="crew website"
          />
          <h4 className="mb-0.5 flex flex-row items-center gap-1  text-sm font-medium">
            CREW™ | SKDIV® <IoIosLink />
          </h4>
          <p className="text-xs text-neutral-400">
            I work here as a Lead Frontend Engineer. Have used Framer Motion/GSAP for animations. 
          </p>
        </a>

        <a href="https://sewna-revamp.vercel.app/">
          <img
            className="mb-2 h-30 w-full rounded object-contain "
            src="/images/sewna.png"
            alt="sewna"
          />
          <h4 className="mb-0.5 flex flex-row items-center gap-1 text-[13px] font-medium">
            Sewna | Revamp Competition <IoIosLink />
          </h4>
          <p className="text-xs text-neutral-400">
            Designed and Developed by me. Took inspiration from Codegrid for implementing micro-interactions using GSAP. 
          </p>
        </a>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={2000}
        >
          <span>View more</span>
        </ScrollLink>

        <FiArrowRight />
      </button>
    </div>
  );
};

const TABS = [
  {
    title: "About",
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
