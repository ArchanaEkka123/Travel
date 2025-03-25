import React from "react";
import "./home.scss";
import About from "./about";
import Navbar from "./navbar";
import Projects from "./projects";
import ContactForm from "./contacform";
import Destination from "./destination";
import Book from "./Book";
import "tailwindcss";
import Services from "./Services";
import Testimonials from "./testimonials";
import Subscribe from "./subscribe";
const Home = () => {
  return (
    <div className="main_outter">
      <div className="main">
        <div className="home_sec01">
          <div className="home-sec">
            <div className="home-left   ">
              <div className="content-holder  ">
                <p className="content-1">Best Destinations around the world</p>
                <p className="home-heading">
                  {/* text-5xl  text-gray-700 */}
                  Travel, enjoy and live a new and full life
                </p>
                <p className="home-content  text-gray-400">
                Built Wicket longer admire do barton vanity itself do in it. 
                Preferred to sportsmen it engrossed listening.
                 Park gate sell they west hard for the.
                </p>
                <div className="button-holder m-10 ">
                  <button className="button">Find out more</button>
                  <button className="button-2  ml-5">
                    
                  <img
                className="Play-button"
                src="/images/Play button.svg"
                alt="Description of the image"
                width={52}
                height={52}
              />
                Play Demo</button>
                </div>
              </div>
            </div>
            <div className="home-right ">
              <img
                className="myimage"
                src="/images/Traveller.png"
                alt="Description of the image"
              />
            </div>
          </div>
         
        </div>
        <Services/>
        <Destination/>
        <Book/>
        <Testimonials/>
        <Subscribe/>
      </div>
    </div>
  );
};

export default Home;
