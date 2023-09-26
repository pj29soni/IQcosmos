import React from "react";
import '../Homepage.css';

const IQScoreComponent = () => {
  return (
    <>
        <div className="container-fluid mt-4">
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="res-title">
                            <h1>What does my IQ score mean?</h1>
                            <p>A score that tells one how “bright” a person is compared to others.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col col-12 col-lg-4 mt-2">
                        <div className="score-box" style={{ background:'#32BCA3' }}>
                            <h3>Very Superior</h3>
                            <p>130 and above</p>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4 mt-2">
                        <div className="score-box" style={{ background:'#40505F' }}>
                            <h3>Superior</h3>
                            <p>120 to 129</p>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4 mt-2">
                        <div className="score-box" style={{ background:'#2685CA' }}>
                            <h3>High Average</h3>
                            <p>109 to 119</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col col-12 col-lg-4 mt-2">
                        <div className="score-box" style={{ background:'#FF7A00' }}>
                            <h3>Average</h3>
                            <p>90 to 109</p>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4 mt-2">
                        <div className="score-box" style={{ background:'#519DD5' }}>
                            <h3>Low Average</h3>
                            <p>80 and 89</p>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4 mt-2">
                        <div className="score-box" style={{ background:'#32BCA3' }}>
                            <h3>Borderline</h3>
                            <p>70 and 79</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col col-12 col-lg-4 mt-2">
                        <div className="score-box" style={{ background:'#2685CA' }}>
                            <h3>below Extremely Low</h3>
                            <p>69 and below</p>
                        </div>
                    </div>
         
                </div>
            </div>
        </div>
    </>
  );
};

export default IQScoreComponent;
