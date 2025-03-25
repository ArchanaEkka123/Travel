import React from "react";
import "./services.scss";
import "tailwindcss";
const Services = () => {
  return (
    <div className="services-main ">
      <div className="services-sec ">
        <div className="services-heading">
          <p className="sub-heading">CATEGORY</p>
          <p className="heading text-4xl font-semibold ">We Offer Best Services</p>
        </div>

        <div card-holder>
          <div className="card-holder">
            <div className="card">
              <div>
                <img
                  className=""
                  src="/images/satellite-dish.png"
                  alt="Description of the image"
                  width={92}
                  height={78}
                />
              </div>
              <div>
                <p className="card-heading"  >Calculated Weather </p>
                <p className="card-description" >
                  Built Wicket longer admire do barton vanity itself do in it.{" "}
                </p>
              </div>
            </div>
            <div className="card">
              <div>
                <img
                  className=""
                  src="/images/plane.png"
                  alt="Description of the image"
                  width={137}
                  height={95}
                />
              </div>
              <div>
                <p className="card-heading">Best Flights</p>
                <p className="card-description">
                Engrossed listening. Park gate sell they west hard for the.{" "}
                </p>
              </div>
            </div>
            <div className="card">
            <div>
               <img
              className=""
              src="/images/mic.png"
              alt="Description of the image"
              width={67}
              height={75}
            /></div>
           <div>
           <p   className="card-heading">Local Events </p>
            <p className="card-description">Barton vanity itself do in it. 
              Preferd to men it engrossed listening.  </p>
           </div>
            
          </div>
          <div className="card">
            <div>
               <img
              className=""
              src="/images/Setting.png"
              alt="Description of the image"
              width={77}
              height={66}
            /></div>
           <div>
           <p   className="card-heading">Customization </p>
            <p className="card-description">
            We deliver outsourced
aviation services for
military customers </p>
           </div>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
