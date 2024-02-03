import React from "react";
import { motion } from "framer-motion";
//https://salehmubashar.com/blog/5-cool-animations-in-react-with-framer-motion animation help
function Cards({ text, index }) {
  return (
    <motion.div
      className="cards"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, 
        transition: {
          duration: 1 
        }
      }}
      viewport={{ once: true }}
    >
      <p className="cards-text">{text}</p>
    </motion.div>
  );
}

export default Cards;
