import React from "react";
import IQFooterComponent from "./HomePageComponent/IQFooterComponent";
import PublicTopHeaderComponent from "./PublicTopHeaderComponent";
import './Homepage.css';
import UserInfoComponent from "./UserInfoComponent/UserInfoComponent";

const PublicUserInfoPage = () => {
  return (
    <>
      <div className="container-fluid p-0 homebg">
        <PublicTopHeaderComponent/>
        <UserInfoComponent/>
        <IQFooterComponent/>
      </div>
    </>
  );
};

export default PublicUserInfoPage;
