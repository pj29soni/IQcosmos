import React from "react";
import { Link } from "react-router-dom";
import IqLogo from "../../../assets/iqcosmos.png";
import '../Homepage.css';
const TopHeaderComponent = () => {
  return (
    <>
        <div className="row mt-3">
          <div className="col col-6 col-lg-6 text-center">
            <img src={IqLogo} alt='iqLogo' className="iq-mbl-logo"/>
          </div>
          <div className="col col-6 col-lg-6 text-center">
            <Link to={'/about-iq'} className="iqBtn mblStart">Start IQ Test</Link>
          </div>
        </div>
    </>
  );
};

export default TopHeaderComponent;
