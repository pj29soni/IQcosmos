import React from "react";
import PenDraw from "../../../assets/homepage/pen-draw.png";
import "../Homepage.css";

const IQKnowComponent = () => {
  return (
    <>
      <br />
      <div className="container-fluid mt-4">
        <div className="container">
          <div className="row row-eq-height">
            <div className="col col-12 col-lg-6 iqnk">
              <div className="iq-country-slider">
                <iframe
                  title="YouTube video player"
                  width="100%"
                  src="https://www.youtube.com/embed/0kHWBj1und4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col col-12 col-lg-6 iqnk">
              <div className="row">
                <div className="col col-12 col-lg-9">
                  <div className="res-title">
                    <h1>Why should</h1>
                    <h1 style={{ color: "#FF7A00" }}>We know IQ?</h1>
                    <p className="knowp mt-4">
                      An IQ test measures a range of an individual's cognitive
                      ability and provides a score that is intended to serve as
                      a way to measure an individual's capabilities and
                      potential.
                    </p>
                
                   
                  </div>
                  <p className="knowp mt-4">
                    IQ stands for intelligence quotient. IQ tests are tools to
                    measure intellectual abilities and potential. we’re designed
                    to reflect a wide range of cognitive skills, such as
                    reasoning, logic, and problem-solving.
                    <br />
                  </p>
                  <p className="knowp mt-4">
                    An IQ test consists of taking various tests measuring
                    intelligence including; spatial recognition, short-term
                    memory, mathematical ability, and analytical thinking.
                    Commonly misunderstood as something that tests all the
                    knowledge you have acquired over the years, the IQ test is
                    actually testing your capacity to learn.
                    <br />
                  </p>
                </div>
                <div className="col col-12 col-lg-3">
                  <div className="penDraw">
                    <img src={PenDraw} alt="pendraw" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IQKnowComponent;
