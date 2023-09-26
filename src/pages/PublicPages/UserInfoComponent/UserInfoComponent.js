import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import "../ContactComponent/Contact.css";
import useAuth from "../../../hooks/useAuth";
import "../IQComponent/IQ.css";

const UserInfoComponent = () => {
  const { iqTestUserResult, setIqTestUserResult } = useAuth();
  const [tempIqTestUserResult, setTempIqTestUserResult] = useState({});

  const options = [
    {
      value: "AU",
      label: "Australia",
      name: "country",
    },
    {
      value: "AR",
      label: "Argentina",
      name: "country",
    },

    {
      value: "BD",
      label: "Bangladesh",
      name: "country",
    },
    {
      value: "BE",
      label: "Belgium",
      name: "country",
    },

    {
      value: "BG",
      label: "Bulgaria",
      name: "country",
    },
    {
      value: "BR",
      label: "Brazil",
      name: "country",
    },
    {
      value: "CA",
      label: "Canada",
      name: "country",
    },
    {
      value: "CH",
      label: "Switzerland",
      name: "country",
    },
    {
      value: "CN",
      label: "China",
      name: "country",
    },
    {
      value: "CO",
      label: "Colombia",
      name: "country",
    },

    {
      value: "ES",
      label: "Spain",
      name: "country",
    },
    {
      value: "FI",
      label: "Finland",
      name: "country",
    },

    {
      value: "FR",
      label: "France",
      name: "country",
    },
    {
      value: "DE",
      label: "Germany",
      name: "country",
    },
    {
      value: "GB",
      label: "United Kingdom",
      name: "country",
    },
    {
      value: "AE",
      label: "United Arab Emirates",
      name: "country",
    },
    { value: "US", label: "United State", name: "country" },
    {
      value: "HK",
      label: "Hong Kong",
      name: "country",
    },
    {
      value: "HU",
      label: "Hungary",
      name: "country",
    },
    {
      value: "IN",
      label: "India",
      name: "country",
    },
    {
      value: "ID",
      label: "Indonesia",
      name: "country",
    },
    {
      value: "IE",
      label: "Ireland",
      name: "country",
    },
    {
      value: "IL",
      label: "Israel",
      name: "country",
    },
    {
      value: "IQ",
      label: "	Iraq",
      name: "country",
    },
    {
      value: "IT",
      label: "Italy",
      name: "country",
    },
    {
      value: "JP",
      label: "Japan",
      name: "country",
    },
    {
      value: "KR",
      label: "Korea",
      name: "country",
    },
    {
      value: "KW",
      label: "Kuwait",
      name: "country",
    },
    {
      value: "LK",
      label: "Sri Lanka",
      name: "country",
    },
    {
      value: "MY",
      label: "Malaysia",
      name: "country",
    },
    {
      value: "NL",
      label: "Netherlands",
      name: "country",
    },
    {
      value: "NZ",
      label: "New Zealand",
      name: "country",
    },
    {
      value: "OM",
      label: "Oman",
      name: "country",
    },
    {
      value: "PH",
      label: "Philippines",
      name: "country",
    },
    {
      value: "PK",
      label: "Pakistan",
      name: "country",
    },
    {
      value: "PL",
      label: "Poland",
      name: "country",
    },
    {
      value: "PT",
      label: "Portugal",
      name: "country",
    },
    {
      value: "QA",
      label: "Qatar",
      name: "country",
    },
    {
      value: "RU",
      label: "Russian Federation",
      name: "country",
    },
    {
      value: "SA",
      label: "Saudi Arabia",
      name: "country",
    },
    {
      value: "SE",
      label: "Sweden",
      name: "country",
    },
    {
      value: "SG",
      label: "Singapore",
      name: "country",
    },
    {
      value: "TH",
      label: "Thailand",
      name: "country",
    },
    {
      value: "TR",
      label: "Turkey",
      name: "country",
    },
    {
      value: "TW",
      label: "Taiwan",
      name: "country",
    },
    {
      value: "AUA",
      label: "Ukraine",
      name: "country",
    },
    {
      value: "UY",
      label: "Uruguay",
      name: "country",
    },
    {
      value: "YE",
      label: "Yemen",
      name: "country",
    },
    {
      value: "ZA",
      label: "South Africa",
      name: "country",
    },
    {
      value: "ZM",
      label: "Zambia",
      name: "country",
    },
    {
      value: "ZW",
      label: "Zimbabwe",
      name: "country",
    },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "rgba(117, 117, 117, 0.5)",
      borderRadius: "8px",

      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "rgba(117, 117, 117, 0.5)",
      },
    }),
  };
  const navigate = useNavigate();

  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newIqTestUserResult = { ...tempIqTestUserResult };
    newIqTestUserResult[field] = value;

    setTempIqTestUserResult(newIqTestUserResult);
  };
  const handleOnSelect = (e) => {
    const field = e.name;
    const value = e.value;
    const newIqTestUserResult = { ...tempIqTestUserResult };
    newIqTestUserResult[field] = e.label;
    newIqTestUserResult["countryCode"] = value;

    setTempIqTestUserResult(newIqTestUserResult);
  };

  const handelLoginSubmit = (event) => {
    event.preventDefault();

    if (tempIqTestUserResult.country === undefined) {
      alert("please enter your country");
      return;
    }
    // const { email, password } = loginData;
    // //password validation by condition
    // if (password === undefined || email === undefined) {
    //   setErrorMessage("please fill the form");
    // } else if (password.length < 6) {
    //   setPasswordAllert("Password must be minimum 6 characters");
    // } else if (password.length > 6) {
    //   setPasswordAllert("");
    // }

    // axios({
    //   method: "POST",
    //   url: `${process.env.REACT_APP_URL_API}/api/signin`,
    //   data: { email, password },
    // })
    //   .then((response) => {
    //     console.log("SIGNIN SUCCESS", response);
    //     const destination = location?.state?.from || "/";
    //     navigate(location?.state?.from || "/", { replace: true });
    //     setErrorMessage("");
    //     authenticate(response.data, () => {
    //       setUser(isAuth());
    //       setIsLoading(false);
    //       navigate("/dashboard", { replace: true });
    //       console.log("cookie local save ", isAuth());
    //     });
    //   })
    //   .catch((error) => {
    //     setErrorMessage(error);
    //     console.log("SIGN IN ERROR", error);
    //     // setValues({ ...values, buttonText: 'Submit' });
    //     //setAuthError(error.response.data.error);
    //   });
    setIqTestUserResult(tempIqTestUserResult);
    navigate("/start-iq", { replace: true });
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-lg-12 p-4">
              <div className="form-title">
                <h3>Fill the User Information</h3>
              </div>
              <div className="contact-form mt-3">
                <form onSubmit={handelLoginSubmit}>
                  <div className="row mb-4">
                    <div className="col col-12 col-lg-6 mb-3">
                      <label htmlFor="fname" className="form-label">
                        First name*
                      </label>
                      <input
                        onBlur={handelOnBlur}
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        id="fname"
                        name="firstname"
                        required
                      />
                    </div>
                    <div className="col col-12 col-lg-6 mb-3">
                      <label htmlFor="lname" className="form-label">
                        Last name*
                      </label>
                      <input
                        onBlur={handelOnBlur}
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        id="lname"
                        name="lastname"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col col-12 col-lg-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email*
                      </label>
                      <input
                        onBlur={handelOnBlur}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="col col-12 col-lg-6 mb-3">
                      <label className="form-label">Country*</label>
                      <Select
                        styles={customStyles}
                        options={options}
                        classNamePrefix="countrySelect"
                        onChange={handleOnSelect}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col col-12 col-lg-6 mb-3">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        onBlur={handelOnBlur}
                        type="text"
                        className="form-control"
                        placeholder="City"
                        id="city"
                        name="city"
                      />
                    </div>
                    <div className="col col-12 col-lg-6 mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Mobile
                      </label>
                      <input
                        onBlur={handelOnBlur}
                        type="text"
                        className="form-control"
                        placeholder="Mobile"
                        id="mobile"
                        name="mobile"
                      />
                    </div>
                  </div>
                  {/*    <div className="row mb-4">
                    <div className="col col-12 col-lg-6 mb-3">
                      <label htmlFor="createddate" className="form-label">
                        created date*
                      </label>
                      <input
                        onBlur={handelOnBlur}
                        type="date"
                        className="form-control"
                        placeholder="Created Date"
                        id="createddate"
                        name="createddate"
                        value={new Date().toISOString().substr(0, 10)}
                        required
                      />
                    </div>
                     <div className="col col-12 col-lg-6 mb-3">
                      <label htmlFor="mobile" className="form-label">
                        location*
                      </label>
                      <input
                        onBlur={handelOnBlur}
                        type="text"
                        className="form-control"
                        placeholder="Location"
                        id="location"
                        name="location"
                        required
                      />
                    </div> 
                  </div> */}
                  <div className="row mb-4">
                    <div className="col col-12 col-lg-3 mb-3">
                      {/* <Link to={'/start-iq'} className="contactBtn">Submit</Link> */}
                      <button
                        type="submit"
                        className="btn btn-dark w-100 font-weight-bold mt-2 p-2"
                      >
                        Submit and start your exam
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="minHeight"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoComponent;
