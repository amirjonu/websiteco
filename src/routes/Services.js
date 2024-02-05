import React from "react";
import Cards from "../components/Cards";
import "./Services.css";




function Services() {
    const items = [
    <div>
        <h1>Step 1: What do you need?</h1>
        <p className="mini">We offer a variety of services including</p>
        <ul className="listitems">
        <li>
            Trash takeout
        </li>
        <li>
            Curbside Cleaning
        </li>
        <li>
            Recycling
        </li>
        <li>
            Sweeping
        </li>
        <li>
            Moving Large Furniture
        </li>
        </ul>
    </div>
    , <div>
        <h1>Step 2: Why us?</h1>
        <p className="mini">
            We do it better than anyone
        </p>
        <ul className="listitems">
            <li>
                Guaranteed Service to the best extent
            </li>
            <li>
                Images to show our amazing work
            </li>
            <li>
                We are a part of NYC, and we will do our best to make it clean
            </li>
            <li>
                Amazing <a className="links" href="/purchase">pricing</a>
            </li>
            <li>
                Moving Large Furniture
            </li>
        </ul>
    </div>
    , <div>
    <h1>Step 3: Contact us?</h1>
    <p className="mini">
        Contact <a className="links" href="/contact">us</a> if you have any questions!
    </p>
    <p className="mini">
        If you are interested please fill out this <a className="links" href="https://forms.gle/82TQUz19bW1U99kq8">form</a>!
    </p>
    
</div>
    ];
  return (
    <div className="services">
      {items.map((item, i) => (
        <Cards key={i} text={item} index={i} />
      ))}
    </div>
  );
}

export default Services;

