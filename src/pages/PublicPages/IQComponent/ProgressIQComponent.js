import React, { useState, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./IQ.css";
import useAuth from "../../../hooks/useAuth";

const ProgressIQComponent = () => {
  const {
  
   
    iqTestFinalResult,
   
  } = useAuth();
  
  const {abstract,analytic,pattern,spatial,visual} = iqTestFinalResult
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(intervalId);
         //navigate("/finish-iq", { replace: true });
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [progress]);

  const circleDasharray = `${2 * Math.PI * 45 * (progress / 100)}, ${
    2 * Math.PI * 45 * (1 - progress / 100)
  }`;

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="container">
          <div className="row mt-2">
            <div className="col col-12">
              <div className="mark-list-div">
                <div className="success-iq2">
                  <h2 style={{ color: "#1A487C", padding: "20px" }}>
                    Please wait while we are calculating your results
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col-12">
              <div className="mark-list-div">
                <div className="progress-bar">
                  <svg viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#ccc"
                      strokeWidth="10"
                    />
                    <circle
                      className="progress"
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#007bff"
                      strokeWidth="10"
                      strokeDasharray={circleDasharray}
                      strokeLinecap="round"
                    />
                    <text
                      x="50"
                      y="50"
                      className="progress-value"
                      textAnchor="middle"
                      dominantBaseline="central"
                    >{`${progress}%`}</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2" style={{ background: "#1A487C" }}>
            <div className="col col-12">
              <div className="mark-list-div2">
                <h4>Cognitive Category Breakdown</h4>
                <br />
                <div className="lists-table">
                  <table className="table table-responsive table-borderless">
                    <tbody>
                      <tr>
                        <td>Visual Perception</td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            {progress >= 15 ? (
                              <>
                                <AiFillCheckCircle color="#16D391" />
                                <span style={{ marginLeft: '0.5rem' }}>{visual}%</span>
                              </>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Abstract Reasoning</td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            {progress >= 30 ? (
                              <>
                                <AiFillCheckCircle color="#16D391" />
                                <span style={{ marginLeft: '0.5rem' }}>{abstract}%</span>
                              </>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Pattern Recognition</td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            {progress >= 45 ? (
                              <>
                                <AiFillCheckCircle color="#16D391" />
                                <span style={{ marginLeft: '0.5rem' }}>{pattern}%</span>
                              </>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Spatial Orientation</td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            {progress >= 60 ? (
                              <>
                                <AiFillCheckCircle color="#16D391" />
                                <span style={{ marginLeft: '0.5rem' }}>{spatial}%</span>
                              </>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Analytical Thinking</td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            {progress >= 100 ? (
                              <>
                                <AiFillCheckCircle color="#16D391" />
                                <span style={{ marginLeft: '0.5rem' }}>{analytic}%</span>
                              </>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
              <div className="col col-12">
                <div className="mark-list-div2 checkfinishdiv">
                  <Link to={'/finish-iq'} className="checkfinish">Check your IQ Score</Link>
                </div>
              </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ProgressIQComponent;
