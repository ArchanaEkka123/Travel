import React from "react";
import "./subscribe.scss";
import "tailwindcss";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <img
        className="share-image"
        src="/images/share.svg"
        alt="Description of the image"
        width={70}
        height={70}
      />
      <img
        className="background-image2"
        src="/images/background-design2.svg"
        alt="Description of the image"
        width={264}
        height={250}
      />
      <div className="subscribe-content">
        <p className="subscribe-heading  font-semibold text-blue-900">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
        <div className="subscribe-input-box overflow-hidden">
          {/* <img
          className="destination-image"
          src="/images/errow.svg"
          alt="Description of the image"
          width={21}
          height={18}
        /> */}
          <input
            type="text"
            placeholder="Your Email"
            className="subscribe-input  border-none overflow-hidden text-ellipsis whitespace-nowrap"
          />
          <button className="subscribe-button text-blue-50 bg-amber-600">
            {" "}
            Subscribe
          </button>
        </div>
      </div>

      {/* <img
        className="background-image1"
        src="/images/background-design1.svg"
        alt="Description of the image"
        width={389}
        height={300}
      /> */}
    </div>
  );
};

export default Subscribe;
