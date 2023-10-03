import React, { useEffect, useState } from "react";
import "../Homepage.css";
import Flag from "../../../assets/homepage/flag.png";
import Flag2 from "../../../assets/homepage/flag2.png";
import Flag3 from "../../../assets/homepage/flag3.png";
import ReactCountryFlag from "react-country-flag";
const IQResListsComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [testTakeListFlag, setTestTakeListFlag] = useState([]);

  function sortByIQLevel(array) {
    array.sort((a, b) => {
      if (a.testResultData.newResult < b.testResultData.newResult) return 1;
      if (a.testResultData.newResult > b.testResultData.newResult) return -1;
      return 0;
    });

    return array;
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/iq-test-list-top-ten`)
      .then((response) => response.json())
      .then((data) => {
        setTestTakeListFlag(sortByIQLevel(data.enhancedResults))
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-12">
            <div className="res-title">
              <h1 className="res-title2">
                Top 10 &nbsp;{" "}
                <span style={{ color: "#FF7A00" }}>IQ Results</span>
              </h1>
              <p>Top 10 IQ result based on the country</p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col-12">
            <div className="res-table">
              <table className="table table-responsive table-borderless table-top-ten">
                <thead></thead>
                <tbody>
                  {testTakeListFlag.map((flag) => (
                    <tr key={flag._id}>
                      <td>
                        <ReactCountryFlag
                          className="emojiFlag"
                          countryCode={flag.countryCode}
                          svg
                          style={{
                            height: "75px",
                            width: "135px",
                            lineHeight: "2em",
                          }}
                          aria-label={flag.countryCode}
                        />
                      </td>
                      <td>{flag.firstname}:&nbsp;</td>
                      <td>IQ : {flag.testResultData?.newResult}</td>
                      <td>
                        {new Date(flag.createdAt).toISOString().substr(0, 10)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IQResListsComponent;
