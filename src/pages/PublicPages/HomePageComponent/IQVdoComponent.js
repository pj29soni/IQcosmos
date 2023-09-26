import React from "react";
import VdoPlay from "../../../assets/homepage/video-play.png";
import '../Homepage.css';

const IQVdoComponent = () => {
  return (
    <>
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col col-12 VdoPlay">
                    <img src={VdoPlay} alt="VdoPlay"/>
                </div>
            </div>
        </div>
    </>
  );
};

export default IQVdoComponent;
