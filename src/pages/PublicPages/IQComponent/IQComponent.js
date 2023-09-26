import React from "react";
import { Link } from "react-router-dom";
import "./IQ.css";

const IQComponent = () => {
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-lg-12 p-4">
              <div className="iq-title">
                <h3>Few guidelines before you start the standard IQ Test</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col-12 col-lg-3 p-4">
              <div className="iq-boxIcon"></div>
              <div className="iq-box ms-1">
                <h4>
                You will be informed about the total time allocated for the test is 40 minutes and whether there are no time limits for each section or question. This information is important for managing your time effectively during the test.
                </h4>
              </div>
            </div>

            <div className="col col-12  col-lg-3 p-4">
              <div className="iq-boxIcon"></div>
              <div className="iq-box ms-1">
                <h4>
                Clarify whether each question should have only one answer choice. multiple answers can’t be selected.
                </h4>
              </div>
            </div>

            <div className="col col-12 col-lg-3 p-4">
              <div className="iq-boxIcon"></div>
              <div className="iq-box ms-1">
                <h4>
                You'll be informed whether you can skip questions and return to them later. IQ tests allow this flexibility to help you optimize your performance.
                </h4>
              </div>
            </div>

            <div className="col col-12  col-lg-3 p-4">
              <div className="iq-boxIcon"></div>
              <div className="iq-box ms-1">
                <h4>
                Emphasize the importance of honest responses and discourage cheating or using external resources.
                </h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col-12 col-lg-12 p-4 text-center">
              <div className="iq-btn">
                <Link to={"/start-iq"} className="iqBtn3">
                  Start your Test
                </Link>
              </div>
            </div>
          </div>

          <div className="minHeight"></div>
        </div>
      </div>
    </>
  );
};

export default IQComponent;
