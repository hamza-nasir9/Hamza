import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BgImgae from '../assets/abstract.jpg';

const Expertise = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -100px 0px",
    amount: 0.1
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const leftItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const rightItemVariants = {
    hidden: { Y: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3
      }
    }
  };

  const headingVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="h-screen w-full flex justify-around items-center text-white bg-black snap-start"
    >
      {/* Left Section - Headings */}
      <motion.div
        className="left"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-[10vw] leading-34 uppercase"
          variants={headingVariants}
        >
          <motion.span 
            className="text-4xl"
            variants={headingVariants}
          >
            where
          </motion.span> expertise
        </motion.h1>
        
        <motion.h1 
          className="text-[10vw] leading-34 uppercase"
          variants={headingVariants}
          transition={{ delay: 0.2 }}
        >
          meets
        </motion.h1>
        
        <motion.h1 
          className="text-[10vw] leading-34 uppercase"
          variants={headingVariants}
          transition={{ delay: 0.4 }}
        >
          innovation
        </motion.h1>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        className="right overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={rightItemVariants}
      >
        <motion.img 
          src={BgImgae} 
          alt="portfolio"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
};

export default Expertise;