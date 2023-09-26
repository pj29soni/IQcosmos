import React from "react";
import { Link } from "react-router-dom";
import './PrivacyPolicy.css'
import IQFooterComponent from "../HomePageComponent/IQFooterComponent";
import PublicTopHeaderComponent from "../PublicTopHeaderComponent";
const PrivacyPolicy = () => {
  return (
    <>
    <PublicTopHeaderComponent/>
      <div className="container top-rated-cars-container py-5">
        <div className="section-title text-center">
          <h3>Privacy Policy</h3>
        </div>

        {/* content */}
        <div className="row">
          <div className="col col-12 col-lg-12 cr-border p-4 cr-pp">
            <p>
              This is a summary of our Privacy Policy. To review our Privacy
              Policy in full, please check below, or scroll down.
            </p>

            <ul className="cr-ppp">
              <li>What does this Privacy Statement cover?</li>
              <ul className="cr-pp-1">
                <li>This Privacy Statement is designed to describe:</li>
                <li>
                  How and what type of personal information we collect and use
                </li>
                <li>When and with whom we share your personal information</li>
                <li>
                  What choices you can make about how we collect, use, and share
                  your personal information
                </li>
              </ul>
              <li>
                What personal information do we collect and use, and how do we
                collect it?
              </li>
              <ul className="cr-pp-1">
                <li>We collect personal information when:</li>
                <li>You give us the information</li>
                <li>We collect it automatically</li>
                <li>We receive it from others</li>
              </ul>
              <li>How is your personal information shared?</li>
              <p>
                Your personal information may be shared to help you book your
                travel and/or vacation, assist with your travel and/or vacation
                stay, communicate with you (including when we send information
                on products and services or enable you to communicate with
                travel providers and/or property owners), and comply with the
                law. The full Privacy Statement details how personal information
                is shared.
              </p>
              <li>What are your rights and choices?</li>
              <p>
                You can exercise your data protection rights in various ways.
                For example, you can opt out of marketing by clicking the
                “unsubscribe” link in the emails, in your account as applicable,
                or contacting our customer service. Our Privacy Statement has
                more information about the options and data protection rights
                available to you.
              </p>
              <li>How to contact us?</li>
              <p>
                More information about our privacy practices is in our full
                Privacy Statement. You can also contact us as described below in
                the <Link to={"/contact-us"}>“Contact Us”</Link> section to ask
                questions about how we handle your personal information or make
                requests about your personal information.
              </p>
            </ul>
            <br />
            <p>
              We may update this Privacy Statement in response to changing laws
              or technical or business developments. You can see when this
              Privacy Statement was last updated by checking the “last updated”
              date displayed at the top of this Statement.
            </p>
          </div>
        </div>
      </div>
      <IQFooterComponent/>
    </>
  );
};

export default PrivacyPolicy;
