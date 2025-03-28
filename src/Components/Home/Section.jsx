import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import InnerSection from "./InnerSection";
import BgImage from "../assets/minimal-lights.webp";

const Section = () => {
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

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const innerSectionVariants = {
    hidden: { y: 50, opacity: 0 },
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
      className="w-full h-full items-center bg-black flex px-16 snap-start"
    >
      {/* Right Section - Image */}
      <motion.div
        className="right w-full"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.img 
          src={BgImage} 
          className="h-screen object-cover"
          alt=""
          variants={imageVariants}
        />
      </motion.div>

      {/* Left Section - Content */}
      <motion.div
        className="left"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={innerSectionVariants}>
          <InnerSection
            heading={"development"}
            para="Partnered Expertise: Harness the collective knowledge of a developer
              dedicated to your project's success. End-to-End Solutions: From
              conceptualization to execution, experience a holistic approach to
              development. Innovative Mindset: Infuse creativity and fresh
              perspectives into your projects for unmatched outcomes."
          />
        </motion.div>
        
        <motion.div variants={innerSectionVariants} transition={{ delay: 0.2 }}>
          <InnerSection
            heading={"Consultations"}
            para="Experience the difference a consultation can make. Together, we'll turn obstacles into opportunities and pave the way for your success."
          />
        </motion.div>
        
        <motion.div variants={innerSectionVariants} transition={{ delay: 0.4 }}>
          <InnerSection
            heading={"Next-Level Success"}
            para="Guide your projects to new heights. Equipped with extensive knowledge, foresight, and a passion for innovation, I'm the key to unlocking untapped potential."
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section;