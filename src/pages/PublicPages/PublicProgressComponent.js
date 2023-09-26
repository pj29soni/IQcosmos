import React from "react";
import IQFooterComponent from "./HomePageComponent/IQFooterComponent";
import PublicTopHeaderComponent from "./PublicTopHeaderComponent";
import './Homepage.css';
import ProgressIQComponent from "./IQComponent/ProgressIQComponent";

const PublicProgressComponent = () => {
  return (
    <>
      <div className="container-fluid p-0 homebg">
        <PublicTopHeaderComponent/>
        <ProgressIQComponent/>
        <IQFooterComponent/>
      </div>
    </>
  );
};

export default PublicProgressComponent;
