import React from "react";
import PricingPlan from "./PricingPlan";

const PricingPlans = () => (
  <div className="pricing-plans">
    <PricingPlan
      planName="Base"
      price="85"
      newprice="25"
      features={["Trash Takeout", "Recycling Sorting or Sweeping"]}
      buyNowText="Buy Now"
    />
    <PricingPlan
      planName="Deluxe"
      price="97"
      newprice="33"
      features={["Trash Takeout", "Recycling Sorting", "Sweeping"]}
      buyNowText="Buy Now"
    />
    <PricingPlan
      planName="Ultimate"
      price="113"
      newprice="113"
      features={[
        "Trash Takeout",
        "Recycling Sorting",
        "Sweeping",
        "Large Furniture",
      ]}
      buyNowText="Buy Now"
    />
  </div>
);

export default PricingPlans;
