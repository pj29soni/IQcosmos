import React from "react";
import IQFooterComponent from "./HomePageComponent/IQFooterComponent";
import PublicTopHeaderComponent from "./PublicTopHeaderComponent";
import './Homepage.css';
import ReviewComponent from "./ContactComponent/ReviewComponent";

const PublicReviewPage = () => {
  return (
    <>
      <div className="container-fluid p-0 homebg">
        <PublicTopHeaderComponent/>
        <ReviewComponent/>
        <IQFooterComponent/>
      </div>
    </>
  );
};

export default PublicReviewPage;
