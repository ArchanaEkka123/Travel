import React from "react";
import "./footer.scss";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-20">
      <div className="footer-content">
        <div className=" footer1">
          <img
            className="footer-jaddo-image"
            src="/images/Jadoo.svg"
            alt="Description of the image"
            width={100}
            height={100}
          />
          <p className="footer1-content ">Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className=" footer1">
          <h2 className=" font-bold">Company</h2>
          <p>About</p>
          <p>Careers</p>
          <p>Mobile</p>
        </div>
        <div className=" footer1">
          <h2 className=" font-bold">Contact</h2>
          <p>Help/FAQ</p>
          <p>Press</p>
          <p>Affilates</p>
        </div>
        <div className=" footer1">
          <h2 className=" font-bold">More</h2>
          <p>Airlinefees</p>
          <p>Airline</p>
          <p>Low fare tips</p>
        </div>
        <div className="footer-social-media">
          <div className="social-media">
            <img
              className="social-media-image"
              src="/images/Social-fb.svg"
              alt="Description of the image"
            />
            <img
              className="social-media-image"
              src="/images/Social-insta.svg"
              alt="Description of the image"
            />

            <img
              className="social-media-image"
              src="/images/Social-twitter.svg"
              alt="Description of the image"
            />
          </div>
          <p className="footer1-content w-full ">Discover our app</p>

          <div className="footer-social-right">
            <img
              className="social-media-image"
              src="/images/Play Store.svg"
              alt="Description of the image"
              width={80}
              height={100}
            />
            <img
              className="social-media-image"
              src="/images/Google Play.svg"
              alt="Description of the image"
              width={80}
              height={100}
            />
          </div>
        </div>
      </div>
      <p className="footer-rights">All rights reserved@jadoo.co</p>
      <img
        className="footer-wave  mt-[-100px] w-full"
        src="/images/footer-wave.svg"
        alt="Description of the image"
      />
    </div>
  );
};

export default Footer;
