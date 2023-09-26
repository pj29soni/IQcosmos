import React from "react";
import { Link } from "react-router-dom";
import PenDraw from "../../../assets/homepage/pen-draw.png";
import './AboutIQ.css';

const AboutIQComponent = () => {
  return (
    <>
        <div className="container-fluid mt-3">
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-lg-9">
                        <div className="res-title">
                            <h1>Why should &nbsp; <span style={{ color:'#FF7A00' }}>We know IQ?</span></h1>
                            <p>Knowing your IQ can provide insight into your cognitive strengths and weaknesses, aiding personal development and career choices.</p>
                            <br/>
                            <br/>

                        </div>
                        <p className="knowp mt-4">The average human has an IQ of 85 to 115. Low scores don’t define students’ futures. It just gives an idea of how proficient a person might be at logical tasks. However, In general, people who understand the world they live in better will avoid things that might endanger their lives.<br/>
IQ scores can serve as a helpful guideline for one’s academic and professional choices. Studies have shown that IQ doesn’t automatically translate into wealth, success, or happiness. What it can do is measure a person’s strengths and weaknesses and give a better- and well-informed idea of how to proceed in certain areas of life.
<br/><br/>So If you don’t know your IQ test scores, you should consider trying a test just to get another bit of info about how your mind works.So If you don’t know your IQ test scores, you should consider trying a test just to get another bit of info about how your mind works.</p>
                        <br/>
                        <br/>
                        <Link to={'/user-information'} className="iqBtn3">Start your Test</Link>
                    </div>
                    <div className="col col-12 col-lg-3">
                        <div className="penDraw">
                            <img src={PenDraw} alt="pendraw"/>
                        </div>
                        
                    </div>
                    <div className="minHeight">

                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default AboutIQComponent;
