import React from "react";
import IQFooterComponent from "./HomePageComponent/IQFooterComponent";
import PublicTopHeaderComponent from "./PublicTopHeaderComponent";
import './Homepage.css';
import BlogIQComponent from "./BlogIQComponent/BlogIQComponent";

const PublicBlogPage = () => {
  return (
    <>
      <div className="container-fluid p-0 homebg">
        <PublicTopHeaderComponent/>
        <BlogIQComponent/>
        <IQFooterComponent/>
      </div>
    </>
  );
};

export default PublicBlogPage;
