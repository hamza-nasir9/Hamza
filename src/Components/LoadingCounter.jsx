import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingCounter = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const interval = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + Math.floor(Math.random() * 10) + 1;
        return nextCount > 100 ? 100 : nextCount;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="w-full h-screen bg-black fixed flex flex-col items-center justify-center z-50 gap-8"
        initial={{ opacity: 1 }}
        animate={isLoading ? {} : { y: -1200, opacity: 0.9 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={
            isLoading 
              ? { y: 0, opacity: 1 } 
              : { y: -200, opacity: 0 }
          }
          transition={{ 
            duration: 1, 
            ease: "backInOut",
            delay: isLoading ? 0 : 0.5
          }}
          className="text-white w-96 py-5 border border-white rounded-full"
        >
          <h1 className="text-4xl flex items-center justify-center">Hamza Nasir</h1>
        </motion.div>

        <motion.h1 
          className="text-9xl text-white Loading absolute right-5 bottom-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {count}%
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default LoadingCounter;