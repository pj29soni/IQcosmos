import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./IQ.css";

const FinishIQComponent = () => {
  const { iqTestFinalResult, setIqTestFinalResult } = useAuth();
  const [data,setData]= useState([])
 
  const timeCountMinute = parseInt(iqTestFinalResult.time) / 60;
  const timeCountSecond = parseInt(iqTestFinalResult.time) % 60;
  
  useEffect(()=>{
    const result = {
      abstract: iqTestFinalResult?.abstract,
      analytic: iqTestFinalResult?.analytic,
      pattern:iqTestFinalResult?.pattern,
      spatial:iqTestFinalResult?.spatial,
      visual:iqTestFinalResult?.visual
    };
    const resultArray = Object.entries(result);

    // Find the maximum value and its corresponding name
    let maxValue = -Infinity;
    let maxName = [];
    resultArray.forEach(([name, value]) => {
      if (value >= maxValue) {
        if (value > maxValue) {
          maxValue = value;
          maxName = [name]; // Reset the maxName array
        } else {
          maxName.push(name);
        }
      }
    });
    setData(maxName);
  }, [iqTestFinalResult]);
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="container">
          <div className="row mt-2">
            <div className="col col-12">
              <div className="mark-list-div">
                <div className="success-iq">
                  <h2 style={{ background: "#c7f6e4", padding: "20px" }}>
                    Well done! you completed the IQ test in:{" "}
                    <span>
                      {parseInt(timeCountMinute)}m {timeCountSecond}s
                    </span>
                    <br />
                    That is faster than 95.2% of people tested.
                    <br />
                    Your strongest category is <span>{data?.join(", ")}</span>
                  </h2>
                  <br />
                  <br />
                  <h2>
                    <span>*****</span>
                  </h2>
                  <h4>Impressive!</h4>
                  <h2>Now check your email to get your IQ score!</h2>
                </div>
              </div>
            </div>
            <div className="minHeight"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinishIQComponent;
