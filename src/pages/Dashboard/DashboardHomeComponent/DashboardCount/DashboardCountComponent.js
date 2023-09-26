import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "../dashboardHome.css";
import { SiSpeedtest } from "react-icons/si";
import { AiOutlineProject, AiOutlineUser, AiFillFlag } from "react-icons/ai";
import { HiUserAdd } from "react-icons/hi";
import { MdReviews, MdCreditScore } from "react-icons/md";
import useAuth from "../../../../hooks/useAuth";
import VisitorCount from "../../../PublicPages/VisitorCount";

const DashboardCountComponent = () => {
  const [dashboardData, setDashboardData] = useState({});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/dashboard-count-data`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setDashboardData(data);

        //setIsLoading(false);
      });
  }, []);
  console.log("dashboardData", dashboardData);

  const { visitorCount, setIqTestFinalResult } = useAuth();

  return (
    <>
      <div className="col col-12 col-lg-3 mt-4">
        <div
          className="count-box"
          style={{ backgroundColor: "rgb(63, 81, 181)" }}
        >
          <div className="count-box2">
            <div className="count-number">
              <h6>{dashboardData.totalTestQuestion}</h6>
              <span>Total Tests</span>
            </div>
            <div className="count-icon">
              <SiSpeedtest />
            </div>
          </div>
        </div>
      </div>

      <div className="col col-12 col-lg-3 mt-4">
        <div
          className="count-box"
          style={{ backgroundColor: "rgb(156, 39, 176)" }}
        >
          <div className="count-box2">
            <div className="count-number">
              <h6>{dashboardData.totalTestTaken}</h6>
              <span>Total Test Taken</span>
            </div>
            <div className="count-icon">
              <AiOutlineProject />
            </div>
          </div>
        </div>
      </div>

      <div className="col col-12 col-lg-3 mt-4">
        <div
          className="count-box"
          style={{ backgroundColor: "rgb(244, 67, 54)" }}
        >
          <div className="count-box2">
            <div className="count-number">
              <h6>{dashboardData.totalUser}</h6>
              <span>Total users</span>
            </div>
            <div className="count-icon">
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </div>

      <div className="col col-12 col-lg-3 mt-4">
        <div
          className="count-box"
          style={{ backgroundColor: "rgb(255, 215, 64)" }}
        >
          <div className="count-box2">
            <div className="count-number">
              <h6>{dashboardData.count}</h6>
              <span>Total countries</span>
            </div>
            <div className="count-icon">
              <AiFillFlag />
            </div>
          </div>
        </div>
      </div>

      {/*   <div className='col col-12 col-lg-3 mt-4'>
                <div className='count-box' style={{backgroundColor:'rgb(156, 39, 176)'}}>
                    <div className='count-box2'>
                        <div className='count-number'>
                            <h6>99</h6>
                            <span>IQ Score Card</span>
                        </div>
                        <div className='count-icon'>
                            <MdCreditScore/>
                        </div>
                    </div>
                </div>
            </div> */}

      {/*   <div className='col col-12 col-lg-3 mt-4'>
                <div className='count-box' style={{backgroundColor:'rgb(244, 67, 54)'}}>
                    <div className='count-box2'>
                        <div className='count-number'>
                            <h6>44</h6>
                            <span>Total Reviews</span>
                        </div>
                        <div className='count-icon'>
                            <MdReviews/>
                        </div>
                    </div>
                </div>
            </div> */}

      <div className="col col-12 col-lg-3 mt-4">
        <div
          className="count-box"
          style={{ backgroundColor: "rgb(63, 81, 181)" }}
        >
          <div className="count-box2">
            <div className="count-number">
              <VisitorCount></VisitorCount>
              <h6>
                <CountUp className="live-dashboard-count" end={visitorCount} duration={3} />
              </h6>
              {/*  <h6><CountUp end={visitorCount} duration={3} /></h6> */}
              <span>Live users</span>
            </div>
            <div className="count-icon">
              <HiUserAdd />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCountComponent;
