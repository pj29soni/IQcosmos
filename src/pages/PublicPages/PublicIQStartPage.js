import React from "react";
import IQFooterComponent from "./HomePageComponent/IQFooterComponent";
import PublicTopHeaderComponent from "./PublicTopHeaderComponent";
import StartIQComponent from "./IQComponent/StartIQComponent";
import './Homepage.css';

const PublicIQStartPage = () => {
  return (
    <>
      <div className="container-fluid p-0 homebg">
        <PublicTopHeaderComponent/>
        <StartIQComponent/>
        <IQFooterComponent/>
      </div>
    </>
  );
};

export default PublicIQStartPage;
