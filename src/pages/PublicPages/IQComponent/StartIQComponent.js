import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoClock } from "react-icons/go";
import IQQuestion from "../../../assets/homepage/iq-question.png";
import ans1 from "../../../assets/homepage/ans1.png";
import ans2 from "../../../assets/homepage/ans2.png";
import ArrPrev from "../../../assets/homepage/arrow-previous.png";
import ArrNext from "../../../assets/homepage/arrow-next.png";
import "./IQ.css";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const StartIQComponent = () => {
  const data1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const data2 = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

  const data3 = ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];

  const data4 = ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40"];

  const [selectedOption, setSelectedOption] = useState(null);
  const [allSelectedOption, setAllSelectedOption] = useState({});
  const [currentIqBankIndex, setCurrentIqBankIndex] = useState(0);
  const {
    setIqTestUserResult,
    iqTestUserResult,
    iqTestFinalResult,
    setIqTestFinalResult,
  } = useAuth();
  const [iqBankList, setIqBankList] = useState([]);

  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    const newAllSelectedOption = { ...allSelectedOption };
    newAllSelectedOption[currentIqBankIndex + 1] = option;
    setAllSelectedOption(newAllSelectedOption);
    setSelectedOption(option);
    nextButton();
  };

  const handleFinishIqResult = () => {
    const finalTime = 40 * 60 - timeLeft;
    console.log(iqTestUserResult);
    console.log(iqBankList);

    let iqtestresult = [];
    for (const key in allSelectedOption) {
      if (Object.hasOwnProperty.call(allSelectedOption, key)) {
        const element = allSelectedOption[key];
        console.log("element ", element, key);
        iqtestresult.push({ id: iqBankList[key - 1]._id, option: element });
      }
    }
    console.log(iqtestresult);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_API}/api/iq-test-upload`,
      data: { iqtestresult, iqTestUserResult },
    })
      .then((response) => {
        //console.log("response ", response);
        let res = response.data;
        res["time"] = finalTime;
        setIqTestFinalResult(res);
        navigate("/progress-test", { replace: true });
      })
      .catch((error) => {
        // setErrorMessage(error);
        //console.log("SIGN IN ERROR", error);
        // setValues({ ...values, buttonText: 'Submit' });
        // setAuthError(error.response.data.error);
      });
    console.log("allSelectedOption ", allSelectedOption);
  };
  // const previousButton = () => {
  //     if (currentIqBankIndex>0) {
  //         setSelectedOption(null)
  //         setCurrentIqBankIndex(currentIqBankIndex - 1)
  //     }
  // };
  // const nextButton = () => {
  //     if (currentIqBankIndex + 1 < iqBankList.length) {
  //         setSelectedOption(null)
  //         setCurrentIqBankIndex(currentIqBankIndex + 1)
  //     }
  // };

  const previousButton = () => {
    if (currentIqBankIndex > 0) {
      setSelectedOption(null);
      setCurrentIqBankIndex(currentIqBankIndex - 1);
      document.getElementById("iq-test-page").classList.add("flash"); // add the flash class
      setTimeout(() => {
        document.getElementById("iq-test-page").classList.remove("flash"); // remove the flash class after a short delay
      }, 300);
    }
  };

  const nextButton = () => {
    console.log("debug next 1 ", currentIqBankIndex);
    if (currentIqBankIndex + 1 < iqBankList.length) {
      setSelectedOption(null);
      setCurrentIqBankIndex(currentIqBankIndex + 1);
      document.getElementById("iq-test-page").classList.add("flash"); // add the flash class
      setTimeout(() => {
        document.getElementById("iq-test-page").classList.remove("flash"); // remove the flash class after a short delay
      }, 300);
    } else if (currentIqBankIndex === 39) {
      console.log("debug next 2");

      //handleFinishIqResult();
    }
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/iq-bank-list`)
      .then((response) => response.json())
      .then((data) => setIqBankList(data));
  }, []);

  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutes in seconds
  // console.log(timeLeft)
  if (parseInt(timeLeft) <= 0) {
    // console.log("balll")
    handleFinishIqResult();
  }
  useEffect(() => {
    const timerId = setInterval(() => {
      // console.log('setInterval')
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="container">
          <div className="row start-iq-title">
            <div className="col col-12 col-lg-4">
              <h3>
                Quest no: {currentIqBankIndex + 1}/{iqBankList?.length}
              </h3>
            </div>
            <div className="col col-12 col-lg-4">
              <h3>Standard IQ Test</h3>
            </div>
            <div className="col col-12 col-lg-4">
              <h3>
                {" "}
                <GoClock />{" "}
                {`${minutes.toString().padStart(2, "0")}:${seconds
                  .toString()
                  .padStart(2, "0")}`}
              </h3>
            </div>
          </div>

          <div id="iq-test-page" className={selectedOption ? "" : "flash"}>
            <div className="row mt-4">
              <div className="col col-1 col-lg-1 d-none d-sm-none d-lg-block">
                <button className="arrow arr-left" onClick={previousButton}>
                  <img src={ArrPrev} alt="previous" />
                </button>
              </div>
              {iqBankList.length ? (
                <>
                  <div className="col col-12 col-lg-5">
                    <div className="iq-question">
                      <h3></h3>
                      <img
                        src={iqBankList[currentIqBankIndex].questionImage}
                        alt="iq-question"
                      />
                    </div>
                  </div>
                  <div className="col col-12 col-lg-5">
                    <div className="iq-answer">
                      <h3>Select Your Answer</h3>
                      <div className="row">
                        <div className="col col-6 iqans">
                          <div
                            className={`ans-img ${
                              selectedOption === "A" ? "selected" : ""
                            }`}
                          >
                            <h4>A: </h4>
                            <input
                              type="radio"
                              id="image-1"
                              name="image-select"
                              checked={selectedOption === "A"}
                              onChange={() => handleOptionSelect("A")}
                            />
                            <label htmlFor="image-1">
                              <img
                                src={iqBankList[currentIqBankIndex].options[0]}
                                alt="ans1"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col col-6 iqans">
                          <div
                            className={`ans-img ${
                              selectedOption === "B" ? "selected" : ""
                            }`}
                          >
                            <h4>B: </h4>
                            <input
                              type="radio"
                              id="image-2"
                              name="image-select"
                              checked={selectedOption === "B"}
                              onChange={() => handleOptionSelect("B")}
                            />
                            <label htmlFor="image-2">
                              <img
                                src={iqBankList[currentIqBankIndex].options[1]}
                                alt="ans2"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-6 iqans">
                          <div
                            className={`ans-img ${
                              selectedOption === "C" ? "selected" : ""
                            }`}
                          >
                            <h4>C: </h4>
                            <input
                              type="radio"
                              id="image-3"
                              name="image-select"
                              checked={selectedOption === "C"}
                              onChange={() => handleOptionSelect("C")}
                            />
                            <label htmlFor="image-3">
                              <img
                                src={iqBankList[currentIqBankIndex].options[2]}
                                alt="ans3"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col col-6 iqans">
                          <div
                            className={`ans-img ${
                              selectedOption === "D" ? "selected" : ""
                            }`}
                          >
                            <h4>D: </h4>
                            <input
                              type="radio"
                              id="image-4"
                              name="image-select"
                              checked={selectedOption === "D"}
                              onChange={() => handleOptionSelect("D")}
                            />
                            <label htmlFor="image-4">
                              <img
                                src={iqBankList[currentIqBankIndex].options[3]}
                                alt="ans4"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-6 iqans">
                          <div
                            className={`ans-img ${
                              selectedOption === "E" ? "selected" : ""
                            }`}
                          >
                            <h4>E: </h4>
                            <input
                              type="radio"
                              id="image-5"
                              name="image-select"
                              checked={selectedOption === "E"}
                              onChange={() => handleOptionSelect("E")}
                            />
                            <label htmlFor="image-5">
                              <img
                                src={iqBankList[currentIqBankIndex].options[4]}
                                alt="ans5"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col col-6 iqans">
                          <div
                            className={`ans-img ${
                              selectedOption === "F" ? "selected" : ""
                            }`}
                          >
                            <h4>F: </h4>
                            <input
                              type="radio"
                              id="image-6"
                              name="image-select"
                              checked={selectedOption === "F"}
                              onChange={() => handleOptionSelect("F")}
                            />
                            <label htmlFor="image-6">
                              <img
                                src={iqBankList[currentIqBankIndex].options[5]}
                                alt="ans6"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}

              <div className="col col-1 col-lg-1 d-none d-sm-none d-lg-block">
                <button className="arrow arr-right" onClick={nextButton}>
                  <img src={ArrNext} alt="next" />
                </button>
              </div>

              <div className="col col-6 col-lg-1 d-block d-sm-block d-md-block d-lg-none">
                <button className="arrow" onClick={previousButton}>
                  <img src={ArrPrev} alt="previous" />
                </button>
              </div>

              <div className="col col-6 col-lg-1 d-block d-sm-block d-md-block d-lg-none">
                <button className="arrow" onClick={nextButton}>
                  <img src={ArrNext} alt="next" />
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col col-12">
              <div className="mark-list-div">
                <ul className="mark-lists">
                  {data1.map((item, index) => {
                    let className = "";
                    if (allSelectedOption[item]) {
                      item += allSelectedOption[item];
                    }
                    if (isNaN(parseInt(item.slice(-1)))) {
                      className = "mark-box-bg";
                    }
                    return (
                      <li key={index} className={className}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col col-12">
              <div className="mark-list-div">
                <ul className="mark-lists">
                  {data2.map((item, index) => {
                    let className = "";
                    if (allSelectedOption[item]) {
                      item += allSelectedOption[item];
                    }
                    if (isNaN(parseInt(item.slice(-1)))) {
                      className = "mark-box-bg";
                    }
                    return (
                      <li key={index} className={className}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col col-12">
              <div className="mark-list-div">
                <ul className="mark-lists">
                  {data3.map((item, index) => {
                    let className = "";
                    if (allSelectedOption[item]) {
                      item += allSelectedOption[item];
                    }
                    if (isNaN(parseInt(item.slice(-1)))) {
                      className = "mark-box-bg";
                    }
                    return (
                      <li key={index} className={className}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col col-12">
              <div className="mark-list-div">
                <ul className="mark-lists">
                  {data4.map((item, index) => {
                    let className = "";
                    if (allSelectedOption[item]) {
                      item += allSelectedOption[item];
                    }
                    if (isNaN(parseInt(item.slice(-1)))) {
                      className = "mark-box-bg";
                    }
                    return (
                      <li key={index} className={className}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col col-12">
              <div className="mark-list-div">
                {/* <Link to={'/finish-iq'} className="iqBtn3">Finish</Link> */}
                <button
                  type="submit"
                  className="iqBtn3 mb-3"
                  onClick={handleFinishIqResult}
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartIQComponent;
