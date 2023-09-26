import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { BiTime } from "react-icons/bi";
import IQBlog from "../../../assets/homepage/iq-blog.jpg";
import "./Blog.css";
import BlogFeaturedComponent from "./BlogFeaturedComponent";
import useAuth from "../../../hooks/useAuth";

const BlogIQComponent = () => {
  const truncateHTML = (html, length) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;

    let text = "";
    let count = 0;
    const nodes = tempElement.childNodes;

    for (const node of nodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent.split(" ");
        for (const word of words) {
          if (count + word.length <= length) {
            text += word + " ";
            count += word.length + 1;
          } else {
            break;
          }
        }
      } else {
        text += node.outerHTML;
        count += node.textContent.length;
      }

      if (count >= length) {
        break;
      }
    }

    return text;
  };
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
      <div className="container-fluid" style={{ backgroundColor: "#f9f9ff" }}>
        <div className="row p-3">
          <div className="col col-12 col-lg-8 mt-3 blog-plpr">
            {blogList.map((data) => (
              <div className="row post-card" key={data._id}>
                <div className="col col-12 col-lg-4">
                  <div className="blog-iq-img">
                    <div className="image-wrapper">
                      <img src={data?.blogPostImage} alt="Blog pic" />
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-lg-8">
                  <div className="blog-iq">
                    <h2>
                      <Link onClick={() => detailsBlog(data._id)}>
                        {data.blogTitle}
                      </Link>
                    </h2>
                    <div
                  dangerouslySetInnerHTML={{
                    __html: truncateHTML(data.blogDesciption, 200),
                  }}
                />
                   {data?.blogDesciption?.length > 200 && (
                  <p>
                    <Link onClick={() => detailsBlog(data._id)}>
                      Read more...
                    </Link>
                  </p>
                )}
                    <div className="post-meta">
                      <time className="post-date" dateTime="2022-05-02">
                        <CgCalendarDates />{" "}
                        {new Date(data.createdAt).toLocaleDateString()}
                      </time>
                      {/*  <span className="read-time">
                 <BiTime/> 4 min read
             </span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <BlogFeaturedComponent />
        </div>
        <div className="minHeight"></div>
      </div>
    </>
  );
};

export default BlogIQComponent;
