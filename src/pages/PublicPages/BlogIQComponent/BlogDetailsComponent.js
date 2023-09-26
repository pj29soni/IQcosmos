import React from "react";
import { Link } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { BiTime } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import IQBlog from "../../../assets/homepage/iq-blog.jpg";
import "./Blog.css";
import BlogFeaturedComponent from "./BlogFeaturedComponent";
import useAuth from "../../../hooks/useAuth";

const BlogDetailsComponent = () => {
  const { blogDetails, setBlogDetails } = useAuth();
  
  return (
    <>
      <div
        className="container-fluid mt-4"
        style={{ backgroundColor: "#F7F7FD" }}
      
      >
        <div className="row ">
          <div className="col col-12 col-lg-8 mt-3">
            <article className="single-post-card">
              <div className="blog-iq-details-img">
                <img src={blogDetails.blogPostImage} alt="Blog pic" />
              </div>
              <div className="single-blog-iq">
                <h2>{blogDetails.blogTitle}</h2>

                <div className="post-meta">
                  <span className="read-time">
                    <AiOutlineUser /> Admin
                  </span>
                  <time className="post-date" dateTime="2022-05-02">
                    <CgCalendarDates />{" "}
                    {new Date(blogDetails?.createdAt).toLocaleDateString()}
                  </time>
                  {/* <span className="read-time">
                    <BiTime /> 4 min read
                  </span> */}
                </div>
                <div dangerouslySetInnerHTML={{ __html: blogDetails.blogDesciption }} />

               {/*  <p className="mt-3">{blogDetails.blogDesciption}</p> */}
              </div>
            </article>
          </div>
          <BlogFeaturedComponent />
        </div>
        <div className="minHeight"></div>
      </div>
    </>
  );
};

export default BlogDetailsComponent;
