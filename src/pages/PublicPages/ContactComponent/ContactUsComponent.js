import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import "./Contact.css";
import axios from "axios";

const ContactUsComponent = () => {
  const options = [
    {
      value: "Australia",
      label: "Australia",
      name: "country",
    },
    {
      value: "United Kingdom",
      label: "United Kingdom",
      name: "country",
    },
    {
      value: "Canada",
      label: "Canada",
      name: "country",
    },
    {
      value: "India",
      label: "India",
      name: "country",
    },
    {
      value: "Germany",
      label: "Germany",
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
  const [contactUs, setContactUs] = useState({});
  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newIqTestUserResult = { ...contactUs };
    newIqTestUserResult[field] = value;

    setContactUs(newIqTestUserResult);
  };
  console.log(contactUs);
  const handelSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_API}/api/send-message-to-support`,
      data: contactUs,
    }).then((response) => {
     
      navigate("/", { replace: true });
    });
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-lg-12 p-4">
              <div className="form-title">
                <h3>Fill the information</h3>
              </div>
              <div className="contact-form mt-3">
                <form onSubmit={handelSubmit}>
                  <div className="row mb-4">
                    <div className="col col-12 col-lg-6 mb-3">
                      <label htmlFor="name" className="form-label">
                        Your name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={handelOnBlur}
                        className="form-control"
                        placeholder="Bryden Tucker"
                        id="name"
                      />
                    </div>
                    <div className="col col-12 col-lg-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Your email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handelOnBlur}
                        className="form-control"
                        placeholder="you@emailid.com"
                        id="email"
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col col-12 col-lg-12 mb-3">
                      <label htmlFor="cname" className="form-label">
                        subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        onChange={handelOnBlur}
                        className="form-control"
                        placeholder="Company name"
                        id="cname"
                      />
                    </div>
                    {/*  <div className="col col-12 col-lg-6 mb-3">
                                        <label className="form-label">Country*</label>
                                        <Select
                                            styles={customStyles}
                                            options={options}
                                            classNamePrefix="countrySelect"
                                        />
                                    </div> */}
                  </div>
                  <div className="row mb-4">
                    <div className="col col-12 col-lg-12 mb-3">
                      <label htmlFor="msg" className="form-label">
                        Your message*
                      </label>
                      <textarea
                        type="text"
                        name="message"
                        onChange={handelOnBlur}
                        className="form-control"
                        placeholder="Type your message…."
                        id="msg"
                        aria-describedby="msgText"
                      ></textarea>
                      <div id="msgText" className="form-text">
                        By submitting this form you agree to our terms and
                        conditions and our Privacy Policy which explains how we
                        may collect, use and disclose your personal information
                        including to third parties.
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col col-12 col-lg-3 mb-3">
                      <button type="submit" className="contactBtn">
                        Contact us
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

export default ContactUsComponent;
