import React from "react";
import "./destination.scss";
import "tailwindcss";
const Destination = () => {
  return (
    <div className="services-main ">
      <div className="services-sec ">
        <div className="services-heading">
          <p className="sub-heading">Top Selling</p>
          <p className="heading text-5xxl  text-black font-semibold ">Top Destinations</p>
        </div>

        <div card-holder>
          <div className="card-holder">
            <div className="card">
              <div>
                <img
                  className="destination-image"
                  src="/images/Destination1.svg"
                  alt="Description of the image"
                  width={314}
                  height={457}  
                />
              </div>
              <div className="content"> 

                <div className="content1">
                <p className="card-description"  >Rome, Italty</p>
                <p className="card-description" >
                $5,42k
                </p>
                </div>
                <div className="content2">
                <img
                  className=""
                  src="/images/Navigation.svg"
                  alt="Description of the image"
                  width={16}
                  height={16}
                />
                <p className="card-description" >
                10 Days Trip
                </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div>
                <img
                  className=""
                  src="/images/Destination2.svg"
                  alt="Description of the image"
                  width={314}
                  height={457}
                />
              </div>
              <div className="content">

                <div className="content1">
                <p className="card-description"  >London, UK</p>
                <p className="card-description" >
                $4.2k
                </p>
                </div>
                <div className="content2">
                <img
                  className=""
                  src="/images/Navigation.svg"
                  alt="Description of the image"
                  width={16}
                  height={16}
                />
                <p className="card-description" >
                12 Days Trip
                </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div>
                <img
                  className=""
                  src="/images/Destination3.svg"
                  alt="Description of the image"
                  width={314}
                  height={457}
                />
              </div>
              <div className="content">

                <div className="content1">
                <p className="card-description"  >Full Europe</p>
                <p className="card-description" >
                $15k
                </p>
                </div>
                <div className="content2">
                <img
                  className=""
                  src="/images/Navigation.svg"
                  alt="Description of the image"
                  width={16}
                  height={16}
                />
                <p className="card-description" >
                28 Days Trip
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
