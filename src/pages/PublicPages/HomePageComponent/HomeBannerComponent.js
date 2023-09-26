import React from "react";
import { Link } from "react-router-dom";
import VdoPlay from "../../../assets/homepage/vdo.mp4";
import '../Homepage.css';
const HomeBannerComponent = () => {
  return (
    <>
        <div className="row mt-3">
            <div className="col col-12 home-banner-bg">

                <div className="background-video">
                  <video src={VdoPlay} autoPlay loop muted />
                </div>
                <div className="banner-txt">
                <h1>Test your <br/><span style={{ color:'#FF7A00' }}>Brain</span></h1>
                <h3 className="highRangeLine">High Range IQ Testing</h3>
                <Link to={'/about-iq'} className="iqBtn9">Start IQ Test</Link>
                </div>
            </div>
        </div>
    </>
  );
};

export default HomeBannerComponent;
