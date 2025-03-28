import { motion } from "framer-motion";

const Navbar = () => {
  const links = ["home", "work", "service", "contact"];
  
  // Same time animation settings
  const container = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 3,
        duration: 1, 
        when: "beforeChildren",
       
      }
    }
  };

  // Sab elements same animation
  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <nav className="flex justify-between px-20 absolute top-10 z-10 left-0 w-full text-white items-center">
        <motion.div className="logo" variants={item}>
          <h1 className="text-xl capitalize border w-42 rounded-full text-center py-2">
            hamza nasir
          </h1>
        </motion.div>

        <div className="links w-96">
          <ul className="flex justify-between">
            {links.map((link, ind) => (
              <motion.li 
                key={ind}
                variants={item}
                className="capitalize text-lg hover:text-gray-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;