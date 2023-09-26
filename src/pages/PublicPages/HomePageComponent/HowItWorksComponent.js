import React from "react";
import '../Homepage.css';
import WorkList1 from "../../../assets/homepage/work-list-01.png";
import WorkList2 from "../../../assets/homepage/work-list-02.png";
import WorkList3 from "../../../assets/homepage/work-list-03.png";
import WorkList4 from "../../../assets/homepage/work-list-04.png";
import { Link } from "react-router-dom";

const HowItWorksComponent = () => {
  return (
    <>
        <div className="container-fluid" style={{ marginTop: '30px', background:'linear-gradient(180deg, #ECFAF8 0%, #FFFFFF 93.47%)' }}>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-lg-6 mt-3">
                        <div className="how-txt">
                            <h1>How it &nbsp;<br/><span style={{ color:'#FF7A00' }}>works?</span></h1>
                            <p>The test contains of a number of questions and the participant is then asked to answer the questions after which the scores are compared with the population.<br/> </p>
                            <Link to={'/about-iq'} className="iqBtn3">Check your IQ</Link>
                            <div className="how-txtLine"></div>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-6 mt-3">
                        <div className="how-work-lists">
                            <ul>
                                <li>
                                    <img src={WorkList1} alt="list 1"/>
                                </li>
                                <li>
                                    <img src={WorkList2} alt="list 2"/>
                                </li>
                                <li>
                                    <img src={WorkList3} alt="list 3"/>
                                </li>
                                <li>
                                    <img src={WorkList4} alt="list 4"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default HowItWorksComponent;
