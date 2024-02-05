import React from "react";

import "./Purchase.css";

function Purchase() {
  return (
    <div className="purchase">
      <div className="pricing-table">
        <div className="itemp">
        <div className="sweeping-only">
          <h2>Basic</h2>
          <br />
          <h3>Includes</h3>
          <p>
            -Trash Takeout
            <br />
            -Recycling Sorting or Sweeping
          </p>
          <br />
          <ul>
            <li>
             <strong>$85</strong>
              <br />1 month
            </li>
            <li>
              <strong>$27</strong>
              <br />1 week
            </li>
            <li>
              <strong>$17</strong>
              <br />
              One-time
            </li>
          </ul>
          <a href="./Contact">
            <button>Buy Now</button>
          </a>
          <p className="storyNotice">
            Additional cost for properties greater than 3 stories
          </p>
        </div>
        <img
          src="https://i.postimg.cc/d0RDr3JP/IMG-2925-1.png"
          alt="man recycling"
          className="purchase-img"
        />
        </div>
        <div className="itemp">
        <div className="sweeping-trash">
          <h2>Deluxe</h2>
          <br />
          <h3>Includes</h3>
          <p>
            -Trash Takeout
            <br />
            -Recycling Sorting
            <br />
            -Sweeping
          </p>
          <br />
          <ul>
            <li>
          <strong>$97</strong>
              <br />1 month
            </li>
            <li>
              <strong>$31</strong>
              <br />1 week
            </li>
            <li>
              <strong>$18</strong>
              <br />
              One-time
            </li>
          </ul>
          <a href="./Contact">
            <button>Buy Now</button>
          </a>
          <p className="storyNotice">
            Additional cost for properties greater than 3 stories
          </p>
        </div>
        <img
          src="https://i.postimg.cc/1XbyL1yr/IMG-2924-1.png"
          alt="man recycling"
          className="purchase-img"
        />
        </div>
        <div className="itemp">

        <div className="heavy-stuff">
          <h2>Ultimate</h2>
          <br />
          <h3>Includes</h3>
          <p>
            -Trash Takeout
            <br />
            -Recycling Sorting
            <br />
            -Sweeping
            <br />
            -Large Furniture
          </p>
          <ul>
            <li>
              <strong>$109</strong>
              <br />1 month
            </li>
            <li>
              <strong>$33</strong>
              <br />1 week
            </li>
            <li>
              <strong>$19</strong>
              <br />
              One-time
            </li>
          </ul>
          <a href="./Contact">
            <button>Buy Now</button>
          </a>
          <p className="storyNotice">
            Additional cost for properties greater than 3 stories
          </p>
        </div>{" "}
        <img
          src="https://i.postimg.cc/vBBMTZBv/IMG-2923-1.png"
          alt="man recycling"
          className="purchase-img"
        />
      </div>
      </div>
    </div>
  );
}

export default Purchase;
