import React from "react";
import { motion } from "framer-motion";
import Video from "../assets/home.mp4";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 3,
        
      }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 100 }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const spanVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.8, duration: 0.6 }
    }
  };

  return (
    <div className="overflow-hidden relative">
      <video
        src={Video}
        autoPlay
        loop
        muted
        className="relative object-cover w-full h-screen"
      />
      
      <motion.div
        className="w-full absolute top-11/12 left-0 transform -translate-y-11/12 z-10 text-white px-10"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <motion.h1 
          className="Main-heading text-[11vw] leading-[0.9] uppercase mb-2"
          variants={textVariants}
        >
          <motion.span className="text-4xl" variants={spanVariants}>
            I'm a
          </motion.span> frontend
        </motion.h1>
        
        <motion.h1 
          className="Main-heading text-[11vw] text-end leading-[0.9] uppercase mb-2"
          variants={textVariants}
        >
          developer <motion.span className="text-4xl" variants={spanVariants}>&</motion.span>
        </motion.h1>
        
        <motion.h1 
          className="Main-heading text-[11vw] leading-[0.9] uppercase"
          variants={textVariants}
        >
          designer
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Hero;