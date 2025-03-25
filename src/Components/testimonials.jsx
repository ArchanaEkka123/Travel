import React from "react";
import "./testimonials.scss";
import "tailwindcss";

const Testimonials = () => {
  return (
    <div className="testimonials">

    
    <div className="testimonials-sec1">
      <div className="testimonials-left   ">
        <div className="book-content-holder  ">
          <p className="content-1">Testimonials</p>
          <p className="book-heading ">What people say
          about Us.</p>
          <div className="book-left-lower-box">
          <img
              className="destination-image"
              src="/images/Dot.svg"
              alt="Description of the image"
              width={87}
              height={12}
            />
          </div>
        </div>
      </div>

      <div className="testimonials-right ">
        <div className="testimonials-card">
          <div className="testimonials-card-image mb-5">
            <img
              className="destination-image"
              src="/images/testimonials-image.svg"
              alt="Description of the image"
              width={68}
              height={68}
            />
          </div>
          <div className="inner-right-content">
            <div className="book-content1">
            <p className="card-description">“On the Windows talking painted
                 pasture yet its express parties use. Sure last upon he same 
                 as knew next. Of believed or diverted no.”</p>
              <p className="card-right-heading">Mike taylor</p>
              <p className="card-description">Lahore, Pakistan</p>
            </div>
           
           
           
          </div>
        </div>
        <div className="testimonial-small-card ">
                     
              <div className="testimonials-right-small-content bg-gray-100">
                            
                <p className="book-left-heading ">
                Chris Thomas
                </p>
                <p className="book-right-small-description">
                CEO of Red Button
                </p>
                
              </div>
            </div>
        
      </div>
    </div>

<div className="testimonials-sec2">

            <img
              className="destination-image"
              src="/images/Group1.svg"
              alt="Description of the image"
              width={100}
              height={20}
            />
            <img
              className="destination-image"
              src="/images/Group2.svg"
              alt="Description of the image"
              width={120}
              height={40}
            />
            <img
              className="destination-image"
              src="/images/Group3.svg"
              alt="Description of the image"
              width={100}
              height={20}
            />
            <img
              className="destination-image"
              src="/images/Group4.svg"
              alt="Description of the image"
              width={100}
              height={20}
            />

            <img
              className="destination-image"
              src="/images/Group5.svg"
              alt="Description of the image"
              width={100}
              height={20}
            />
</div>


    </div>
  );
};

export default Testimonials;
