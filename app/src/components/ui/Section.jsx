import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="bg-transparent relative z-[20]   w-full  p-4 md:p-8">
      <div className="mx-auto w-[250px] vxs:w-full overflow-hidden vxs:max-w-5xl">
        <Link
          heading="Event   Management   Website"
          subheading="Full-Stack Event Management Website"
          imgSrc="/images/EventManagement.png"
          href="https://innodev-24-3.onrender.com"
        />
        <Link
          heading="Blog Application"
          subheading="Full-Stack Blog Web App"
          imgSrc="/images/BlogApp.png"
          href="https://blog-app-irma.onrender.com"
        />
        <Link
          heading="Mess Management Portal"
          subheading="This was my First Hackathon Project "
          imgSrc="/images/MessManagementPortal.png"
          href="https://github.com/IAMAmanRaj/WebSter-23-Forked"
        />
        <Link
          heading="Next Auth App"
          subheading="Full Stack Authentication App , Next JS"
          imgSrc="/images/NextAuth.png"
          href="https://github.com/IAMAmanRaj/NextAuth-v5.0"
        />

        <Link
          heading="Dice Game"
          subheading="Incase you're bored , I got you covered with a Dice Game"
          imgSrc="/images/DiceGame.png"
          href="https://brilliant-bonbon-5d2ce1.netlify.app/"
        />
        <Link
          heading="More Projects"
          subheading="Head over to the repository section of my Github. I am always working :)"
          imgSrc="/images/GithubProfile.png"
          href="https://github.com/IAMAmanRaj?tab=repositories"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split(" ").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
