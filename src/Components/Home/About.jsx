import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  // Changed margin to trigger earlier and added threshold
  const isInView = useInView(ref, { 
    once: true,
    margin: "0px 0px -200px 0px",
    amount: 0.1 // Triggers when 10% of element is visible
  });

  return (
    <div ref={ref} className='h-screen w-full bg-black flex items-center justify-center snap-start'>
      <motion.div 
        className="text w-[60%] text-center"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          when: "beforeChildren" // Ensures parent animates first
        }}
      >
        <motion.p 
          className='text-white text-4xl'
          initial={{ y: 20, opacity: 0 }} // Added slight y movement
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ 
            delay: 0.3, 
            duration: 0.6,
            ease: "backOut"
          }}
        >
          I have been working  for the past 10 years with Javascript. I’ve been writing/refactoring code and connecting restful apis using Angular, React and Vuejs for a couple of years but I also worked with different stacks in the past. I can help/guide your developers with best practices as well.
        </motion.p>
        
        <motion.div 
          className="btn mt-10 w-full flex justify-evenly"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ 
            delay: 0.6, 
            duration: 0.5,
            ease: "circOut"
          }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='w-60 capitalize border rounded-full text-lg py-2 bg-white hover:bg-gray-200 transition-colors'
          >
            know more
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className='w-60 border rounded-full text-lg py-2 border-white text-white capitalize'
          >
            contact
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About;