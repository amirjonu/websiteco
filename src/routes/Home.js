import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  const text = "DWJ Curbside".split(" ");
  return (
    <div className="bigHome">
    <div className="home">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: i / 2.5,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
    



    <div className="meetus">
      <div className="image-container">
        <img src="https://i.postimg.cc/Pfy3KQSN/IMG-2921.jpg" alt="two men holding cleaning equipment" />
      </div>

      <div className="text-container">
        <h2>Up Close & Personal</h2>
        <p>
        A small business created to help people with trash takeout to the curb and sweeping the front sidewalk. 
We are committed to creating value and security for all our clients.
        </p>
        <h3>What we offer </h3>
        <p>
        - Providing all supplies necessary for FREE
        <br />- Paying for any tickets issued by the City because of our service
        <br />- Professional staff 
        <br />- Photos of the work done after service (Optional)
        </p>
      </div>
    </div>



  </div>
  );
}

export default Home;
