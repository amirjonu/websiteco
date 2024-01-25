import React from "react";

const PricingPlan = ({
  planName,
  price,
  newprice,
  features,
  buyNowText,
  ...props
}) => (
  <div className="pricing-plan" {...props}>
    <h3 className="plan-name">{planName}</h3>
    {newprice === price ? (
      <p className="price1">${price}</p>
    ) : (
      <>
        <del className="price">${price}</del>
        <span className="new-price">${newprice}</span>
      </>
    )}
    <ul className="features">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="buy-now">{buyNowText}</button>
  </div>
);

export default PricingPlan;
