import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import IQBlog from "../../../assets/homepage/iq-blog.jpg";
import "./Blog.css";
import useAuth from "../../../hooks/useAuth";

const BlogFeaturedComponent = () => {
  const [blogList, setBlogList] = useState([]);
  const { blogDetails, setBlogDetails } = useAuth();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/blog-list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogList(data);
      });
  }, []);

  const navigate = useNavigate();
  const detailsBlog = (id) => {
    fetch(`${process.env.REACT_APP_URL_API}/api/blog-details?id=${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogDetails(data);
        navigate("/blog-details", { replace: true });
      });
  };
  return (
    <>
      <div className="col col-12 col-lg-4 mt-3 blog-plpr">
        <div className="post-card">
          <div className="featured-title">
            <h2>Featured posts</h2>
          </div>
          {blogList?.slice(0, 4).map((data) => (
            <div className="row recent-ppst" key={data._id}>
              <div className="col col-12 col-lg-4">
                <div className="blog-iq-img">
                  <div className="image-wrapper">
                    <img src={data?.blogPostImage} alt="Blog pic" />
                  </div>
                </div>
              </div>
              <div className="col col-12 col-lg-8">
                <div className="blog-iq2">
                  <h2>
                    <Link onClick={() => detailsBlog(data._id)}>
                      {data.blogTitle}
                    </Link>
                  </h2>
                  <div className="post-meta">
                    <span className="read-time">
                      <BiTime /> {new Date(data.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogFeaturedComponent;
