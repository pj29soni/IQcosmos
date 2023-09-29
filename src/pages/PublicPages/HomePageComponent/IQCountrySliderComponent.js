import React, { useEffect, useState } from "react";
import "../Homepage.css";
import Slider from "react-slick";
import flag1 from "../../../assets/homepage/flags6.png";
import flag2 from "../../../assets/homepage/flags5.png";
import flag3 from "../../../assets/homepage/flags6.png";
import flag4 from "../../../assets/homepage/flags4.png";
import flag5 from "../../../assets/homepage/flags5.png";
import flag6 from "../../../assets/homepage/flags6.png";
import flag7 from "../../../assets/homepage/flags5.png";
import ReactCountryFlag from "react-country-flag";
const IQCountrySliderComponent = () => {
  const images = [flag1, flag2, flag3, flag4, flag5, flag6, flag7];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [testTakeList, setTestTakeList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/iq-test-list`)
      .then((response) => response.json())
      .then((data) => setTestTakeList(data));
  }, []);
  //load data for slider
  const [testTakeListFlag, setTestTakeListFlag] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/iq-test-taken-result-list`)
      .then((response) => response.json())
      .then((data) => setTestTakeListFlag(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="iq-country-slider iqsl">
              {/* <img src={iqCountrySlider} alt="slider" /> */}
              <h1 className="res-title5 text-center">
                <span style={{ color: "#FF7A00", fontWeight: "700" }}>
                  {testTakeList.length} +
                </span>
                &nbsp; IQ Test Taken
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-lg-12">
            <div className="carousel-container">
              <Slider {...settings}>
                {testTakeListFlag.map((flag) => (
                  <div key={flag._id} className="flag-container">
                    <ReactCountryFlag
                      className="emojiFlag"
                      countryCode={flag.countryCode}
                      svg
                      style={{
                        height: "75px",
                        width: "135px",
                        lineHeight: "2em",
                      }}
                      aria-label={flag.countryCode}
                    />
                    <div className="flag-text-container">
                      <div className="flag-text">
                        <h3 className="iqcnme">
                          {flag.firstname}:&nbsp;
                          {flag.iqLevel}
                        </h3>
                        <h5 className="iqcnme2">
                          {new Date(flag.createdAt).toISOString().substr(0, 10)}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IQCountrySliderComponent;
