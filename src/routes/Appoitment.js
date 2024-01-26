import React from "react";
import { InlineWidget } from "react-calendly";
import "./Appoitment.css";

//https://www.npmjs.com/package/react-calendly
//intergration of calendly and react is from above link^^^^^
function Appoitment() {
  return (
    <div className="appoitment">
      <div className="box">
        <InlineWidget url="https://calendly.com/willie-dwj/informational-appointment" />
      </div>
    </div>
  );
}

export default Appoitment;
