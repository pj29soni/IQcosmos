import React from "react";
import { Link } from "react-router-dom";
import './Contact.css';

const ReviewComponent = () => {

    


  return (
    <>
        <div className="container-fluid mt-3">
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-lg-12 p-4">
                        <div className="form-title">
                            <h3>Review</h3>
                        </div>
                        <div className="contact-form mt-3">
                            <form>
                                <div className="row mb-4">
                                    <div className="col col-12 col-lg-6 mb-3">
                                        <label htmlFor="name" className="form-label">Name*</label>
                                        <input type="text" className="form-control" placeholder="Bryden Tucker" id="name" />
                                    </div>
                                    <div className="col col-12 col-lg-6 mb-3">
                                        <label htmlFor="email" className="form-label">Email *</label>
                                        <input type="email" className="form-control" placeholder="you@emailid.com" id="email" />
                                    </div>
                                </div>
                                
                                <div className="row mb-4">
                                    <div className="col col-12 col-lg-12 mb-3">
                                        <label htmlFor="msg" className="form-label">Review*</label>
                                        <textarea type="text" className="form-control" placeholder="Type your message…." id="msg" aria-describedby="msgText">
                                        </textarea>
                                        
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col col-12 col-lg-3 mb-3">
                                        <Link to={'/'} className="contactBtn">Submit</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="minHeight">

                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ReviewComponent;
