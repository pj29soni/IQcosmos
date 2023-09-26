import React from "react";
import HomeBannerComponent from "./HomePageComponent/HomeBannerComponent";
import HowItWorksComponent from "./HomePageComponent/HowItWorksComponent";
import IQCountComponent from "./HomePageComponent/IQCountComponent";
import TopHeaderComponent from "./HomePageComponent/TopHeaderComponent";
import './Homepage.css';
import IQResListsComponent from "./HomePageComponent/IQResListsComponent";
import IQRankingComponent from "./HomePageComponent/IQRankingComponent";
import IQScoreComponent from "./HomePageComponent/IQScoreComponent";
import IQKnowComponent from "./HomePageComponent/IQKnowComponent";
import IQFooterComponent from "./HomePageComponent/IQFooterComponent";
import IQCountrySliderComponent from "./HomePageComponent/IQCountrySliderComponent";
import IQDownload from "./IQDownload";

const PublicHomePage = () => {
  return (
    <>
      <div className="container-fluid p-0 homebg">
        <TopHeaderComponent/>
        <HomeBannerComponent/>
        <IQCountrySliderComponent/>
        <HowItWorksComponent/>
        <IQCountComponent/>
        <IQDownload/>
        <IQResListsComponent/>
        <IQRankingComponent/>
        <IQScoreComponent/>
        <IQKnowComponent/>
        <IQFooterComponent/>
      </div>
    </>
  );
};

export default PublicHomePage;
