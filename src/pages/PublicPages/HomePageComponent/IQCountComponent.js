import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import LiveDot from "../../../assets/homepage/dot.gif";
import useAuth from "../../../hooks/useAuth";
import "../Homepage.css";
import VisitorCount from "../VisitorCount";

const IQCountComponent = () => {
  const { visitorCount, setIqTestFinalResult } = useAuth();
  const [testList, setTestList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/iq-bank-list-count`)
      .then((response) => response.json())
      .then((data) => setTestList(data));
  }, []);
  const [testavg, setTestAvg] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/iq-test-average-result`)
      .then((response) => response.json())
      .then((data) => setTestAvg(data));
  }, []);

  return (
    <>
      <div className="container-fluid countBg">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-lg-4">
              <div className="test-count text-center">
                <h2 className="mt-2">Total number of tests</h2>
                <h1 style={{ color: "#568110" }}>
                  <CountUp end={testList} duration={5} separator="," />
                </h1>
              </div>
            </div>
            <div className="col col-12 col-lg-4">
              <div className="test-count text-center">
                <h2 className="mt-2">Real-Time User</h2>
                <VisitorCount></VisitorCount>
                <h1 style={{ color: "#C40B0B" }}>
                  <img src={LiveDot} alt="live" className="liveDot" />
                  <CountUp end={visitorCount} duration={3} />
                </h1>
              </div>
            </div>
            <div className="col col-12 col-lg-4">
              <div className="test-count text-center">
                <h2 className="mt-2">Today's average IQ</h2>
                <h1 style={{ color: "#C4640B" }}>
                  <CountUp end={testavg} decimals={2} duration={2} />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IQCountComponent;
