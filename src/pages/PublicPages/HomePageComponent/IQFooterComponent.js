import React from "react";
import fb from "../../../assets/homepage/fb.png";
import insta from "../../../assets/homepage/insta.png";
import youtube from "../../../assets/homepage/youtube.png";
import iconLine from "../../../assets/homepage/icon-line.png";
import '../Homepage.css';
import { Link } from "react-router-dom";

const IQFooterComponent = () => {
    return (
        <>
            <div className="container-fluid ff footer-bg">
                <div className="row">
                    <div className="col col-12">
                        <div className="d-flex align-items-center justify-content-center">
                            <ul className="footericon">
                                <li>
                                    <a href='https://www.facebook.com/profile.php?id=61550083335381' target="_blank">
                                        <img src={fb} alt="icon" />
                                    </a>
                                </li>
                                <li>
                                    <img src={iconLine} alt="icon" />
                                </li>
                                <li>
                                    <a href='https://www.instagram.com/iqcosmos8155/' target="_blank">
                                        <img src={insta} alt="icon" />
                                    </a>
                                </li>
                                <li>
                                    <img src={iconLine} alt="icon" />
                                </li>
                                <li>
                                    <a href='https://www.youtube.com/@iqcosmos' target="_blank">
                                        <img src={youtube} alt="icon" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white mb-3">
                    <p className="addressLine">9Dot Technology Inc., 123 Edward St., Suite 200-V8, Toronto, M5G 1E2</p>
                </div>
                <div className="row">
                    <div className="col col-12">
                        <div className="d-flex align-items-center justify-content-center">
                            <ul className="footerMenu">
                                <li>
                                    <Link to={'/about-iq'}>
                                        About IQ
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/contact-us'}>
                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/review'}>
                                        Review
                                    </Link>
                                </li>

                                <li>
                                    <Link to={'/terms'}>
                                        Terms & Conditions
                                    </Link>
                                </li>

                                <li>
                                    <Link to={'/privacy'}>
                                        Privacy policy
                                    </Link>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default IQFooterComponent;
