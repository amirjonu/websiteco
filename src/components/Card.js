import React from "react";
import { FaCheck } from "react-icons/fa";

const Card = ({ plan }) => {
  return (
    <div className="card">
      <div className="card-header">
        <FaCheck />
        <h2>{plan.name}</h2>
      </div>
      <div className="card-body">
        {plan.features.map((feature, index) => (
          <div key={index} className="feature">
            <FaCheck />
            <span>{feature.name}</span>
            <span>{feature.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
