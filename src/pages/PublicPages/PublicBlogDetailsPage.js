import React from "react";
import IQFooterComponent from "./HomePageComponent/IQFooterComponent";
import PublicTopHeaderComponent from "./PublicTopHeaderComponent";
import './Homepage.css';
import BlogDetailsComponent from "./BlogIQComponent/BlogDetailsComponent";

const PublicBlogDetailsPage = () => {
  return (
    <>
      <div className="container-fluid p-0 homebg">
        <PublicTopHeaderComponent/>
        <BlogDetailsComponent/>
        <IQFooterComponent/>
      </div>
    </>
  );
};

export default PublicBlogDetailsPage;
