import React from "react";
import "./Book.scss";
import "tailwindcss";

const Book = () => {
  return (
    <div className="book-sec">
      <div className="book-left   ">
        <div className="book-content-holder  ">
          <p className="content-1">Easy and Fast</p>
          <p className="book-heading ">Book your next trip in 3 easy steps</p>
          <div className="book-left-lower-box pl-10">
            <div className=" book-left-box">
              <div className="book-left-image">
                <img
                  className="Play-button"
                  src="/images/book1.svg"
                  alt="Description of the image"
                  width={47}
                  height={48}
                />
              </div>

              <div className="book-left-content">
                <p className="book-left-heading text-2xl">
                  Choose Destination{" "}
                </p>
                <p className="book-left-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
            <div className="book-left-box ">
              <div className="book-left-image">
                <img
                  className="Play-button"
                  src="/images/book2.svg"
                  alt="Description of the image"
                  width={47}
                  height={48}
                />
              </div>

              <div className="book-left-content">
                <p className="book-left-heading text-2xl">
                  Choose Destination{" "}
                </p>
                <p className="book-left-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
            <div className=" book-left-box ">
              <div className="book-left-image">
                <img
                  className="Play-button"
                  src="/images/book3.svg"
                  alt="Description of the image"
                  width={47}
                  height={48}
                />
              </div>

              <div className="book-left-content">
                <p className="book-left-heading text-2xl">
                  Choose Destination{" "}
                </p>
                <p className="book-left-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="book-right ">
        <div className="book-card">
          <div className="card-image mb-5">
            <img
              className="book-image"
              src="/images/book-right-image.png"
              alt="Description of the image"
              width={321}
              height={161}
            />
          </div>
          <div className="inner-right-content">
            <div className="book-content1">
              <p className="card-right-heading">Trip To Greece</p>
              <p className="card-description">14-29 June by Robbin joseph</p>
            </div>
            <div className="book-content2">
              <img
                className=""
                src="/images/Navigation.svg"
                alt="Description of the image"
                width={16}
                height={16}
              />
               <img
                className=""
                src="/images/Navigation.svg"
                alt="Description of the image"
                width={16}
                height={16}
              />
               <img
                className=""
                src="/images/Navigation.svg"
                alt="Description of the image"
                width={16}
                height={16}
              />
             
            </div>
            <div className="book-right-bottom">
            <img
                className="book-right-bottom-image"  
                src="/images/building1.svg"
                alt="Description of the image"
                width={16}
                height={16}
              />
            <p className="card-description">24 people going</p>

            </div>
           
          </div>
        </div>
        <div className="small-card ">
        
              <div className="small-card-image">
                <img
                  className="Play-button"
                  src="/images/small-card.svg"
                  alt="Description of the image"
                  width={47}
                  height={48}
                />
              </div>

              <div className="book-right-small-content">
              
              <p className="book-right-small-description">
              Ongoing
                </p>
                <p className="book-left-heading ">
                Trip to rome
                </p>
                <p className="book-right-small-description">
                40% completed
                </p>
                <img
                  className="Play-button"
                  src="/images/book-scale.svg"  
                  alt="Description of the image"
                  width={156}
                  height={5}
                />
              </div>
            </div>
        
      </div>
    </div>
  );
};

export default Book;
