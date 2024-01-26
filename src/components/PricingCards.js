import React from "react";
import Card from "./Card";

const PricingCards = () => {
  const plans = [
    {
      name: "Takeout",
      features: [
        { name: "Trash Takeout", price: "$25" },
        { name: "Recycling", price: "Included" },
      ],
    },
    {
      name: "Takeout + Sorting",
      features: [
        { name: "Trash Takeout", price: "$33" },
        { name: "Recycling", price: "Included" },
        { name: "Sorting", price: "Included" },
      ],
    },
    {
      name: "Takeout + Sorting + Sweeping",
      features: [
        { name: "Trash Takeout", price: "$113" },
        { name: "Recycling", price: "Included" },
        { name: "Sorting", price: "Included" },
        { name: "Sweeping", price: "Included" },
      ],
    },
  ];

  return (
    <div className="pricing-cards">
      {plans.map((plan, index) => (
        <Card key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingCards;
