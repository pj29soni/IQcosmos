import React from "react";
import IQFooterComponent from "./HomePageComponent/IQFooterComponent";
import PublicTopHeaderComponent from "./PublicTopHeaderComponent";
import './Homepage.css';
import FinishIQComponent from "./IQComponent/FinishIQComponent";

const PublicFinishComponent = () => {
  return (
    <>
      <div className="container-fluid p-0 homebg">
        <PublicTopHeaderComponent/>
        <FinishIQComponent/>
        <IQFooterComponent/>
      </div>
    </>
  );
};

export default PublicFinishComponent;
