import React from "react";
import AboutIQComponent from "./AboutIQComponent/AboutIQComponent";
import IQFooterComponent from "./HomePageComponent/IQFooterComponent";
import PublicTopHeaderComponent from "./PublicTopHeaderComponent";
import './Homepage.css';

const PublicAboutPage = () => {
  return (
    <>
      <div className="container-fluid p-0 homebg">
        <PublicTopHeaderComponent/>
        <AboutIQComponent/>
        <IQFooterComponent/>
      </div>
    </>
  );
};

export default PublicAboutPage;
