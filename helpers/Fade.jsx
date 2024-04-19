import React from 'react'
import {motion,AnimatePresence} from 'framer-motion';

const Fade = ({children}) => {
    const variants = {
        open: { x: 0 },
        closed: { x: "-100%" }
      };

      const transition = {
        type: "spring", // Animasyon tipi: spring, tween, etc.
        damping: 25, // Yayınlanma miktarı
        stiffness: 300 // Sertlik
      };
  return (

    <AnimatePresence>
   <motion.div
        className="sidebar"
        initial={false}
        // animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={transition} // Animasyon geçişi
        style={{
        //   width: "300px",
          height: "100vh",
          backgroundColor: "lightgray",
          position: "fixed",
          top: 0,
          left: 0
        }}
      >
      {children}
    </motion.div>

    </AnimatePresence>
  )
}

export default Fade