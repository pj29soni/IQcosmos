import React from "react";
import IQFooterComponent from "./HomePageComponent/IQFooterComponent";
import PublicTopHeaderComponent from "./PublicTopHeaderComponent";
import './Homepage.css';
import ContactUsComponent from "./ContactComponent/ContactUsComponent";

const PublicContactPage = () => {
  return (
    <>
      <div className="container-fluid p-0 homebg">
        <PublicTopHeaderComponent/>
        <ContactUsComponent/>
        <IQFooterComponent/>
      </div>
    </>
  );
};

export default PublicContactPage;
