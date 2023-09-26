import React from "react";
import IQFooterComponent from "./HomePageComponent/IQFooterComponent";
import PublicTopHeaderComponent from "./PublicTopHeaderComponent";
import IQComponent from "./IQComponent/IQComponent";
import './Homepage.css';

const PublicIQPage = () => {
  return (
    <>
      <div className="container-fluid p-0 homebg">
        <PublicTopHeaderComponent/>
        <IQComponent/>
        <IQFooterComponent/>
      </div>
    </>
  );
};

export default PublicIQPage;
