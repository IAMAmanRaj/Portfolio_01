import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import React from "react";

import { IoLogoReact } from "react-icons/io5";

import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { SiJavascript } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { SiNetlify } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { SiRedux } from "react-icons/si";
const cards = [
  {
    Icon: IoLogoReact,
    
    id: 1,
  },
  {
    Icon: SiTailwindcss,
   
    id: 2,
  },
  {
    Icon: SiVite,
   
    id: 3,
  },
  {
    Icon: SiJavascript,
  
    id: 4,
  },
  {
    Icon: FaGithub,
   
    id: 5,
  },
  {
    Icon:FaGitAlt,
 
    id: 6,
  },
  {
    Icon:SiFirebase,
   
    id: 7,
  },
  {
    Icon:SiMongodb,
   
    id: 8,
  },
  {
    Icon:SiExpress,
   
    id: 9,
  },
  {
    Icon:SiNetlify,
   
    id: 10,
  },
  {
    Icon:IoLogoCss3,
   
    id: 11,
  },
  {
    Icon:TiHtml5,
   
    id: 12,
  },
  {
    Icon:SiRender,
   
    id: 13,
  },
  {
    Icon:IoLogoVercel,
   
    id: 14,
  },
  {
    Icon:SiVisualstudio,
   
    id: 15,
  },
  {
    Icon:FaFigma,
   
    id: 16,
  },
  {
    Icon:SiGreensock ,
   
    id: 17,
  },
  {
    Icon:SiRedux ,
   
    id: 18,
  },
];



const Example = () => {

  return (
    <div id="skills" className="bg-transparent z-[20] relative flex flex-col justify-center">
       <span className=" bg-transparent absolute left-1/2 flex justify-center  px-2 vxs:px-0 transform -translate-x-1/2 text-[15px] sm:text-[30px] w-full md:text-4xl lg:text-5xl mt-24 xl:text-7xl font-bold  text-blue-200  ">
Technologies I am familiar with 
</span>
      
      <HorizontalScrollCarousel />
      
     
      
      
    </div>
  );
};





const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative  h-[300vh]   ">
      <div className="sticky top-0  flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card className="" card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const Icon = card.Icon;
  return (
    <div
      key={card.id}
      className="group relative flex justify-center items-center h-[100px] w-[100px]   sm:h-[200px] sm:w-[200px]  lg:h-[300px] lg:w-[300px] overflow-hidden  "
    >
      <Icon className="hover:cursor-pointer text-slate-100 hover:text-blue-300 hover:scale-125 transition-all duration-300" size="50%" />
    </div>
  );
};

export default Example;

