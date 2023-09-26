import React, { useState } from "react";
import { DefaultEditor } from "react-simple-wysiwyg";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../utilities/helper";
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const BlogComponent = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  const handelOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...blogData };
    newData[field] = value;
    setBlogData(newData);
  };

  const handleOnSelectImage = (e) => {
    const field = e.target.name;
    //const value = e.target.value;
    const file = e.target.files[0];
    let postid = uuidv4();
    let { type, name } = file;
    let namesplit = name.split(".");
    let nameExtension = namesplit[namesplit.length - 1];
    let blob = file.slice(0, file.size, type);
    let newFile = new File([blob], `${postid}_post.${nameExtension}`, {
      type: type,
    });
    const newData = { ...blogData };
    newData[field] = newFile;
    setBlogData(newData);
  };
console.log("blogData",blogData)
  const handelSubmit = (e) => {
    e.preventDefault();
    //setIsLoading(true);

    const uploadedData = {
      ...blogData,
    };
    let formData = new FormData();

    formData.append("blogTitle", uploadedData.blogTitle);
    formData.append("blogDesciption", uploadedData.blogDesciption);
    formData.append("blogPostImage", uploadedData.blogPostImage);
    fetch(`${process.env.REACT_APP_URL_API}/api/blog-create`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/login", { replace: true });
        }
      })

      .then((data) => {
        if (data) {
          console.log(data);
          setBlogData("");
          e.target.reset();
          //setIsLoading(false);

          navigate("/dashboard/blog-list", { replace: true });
        }
      });
  };
  return (
    <>
      <div className="test-form">
        <div className="test-upload-form mx-auto w-75">
          <h2 className="form-title text-center">News & Blog</h2>
          <form onSubmit={handelSubmit} encType="multipart/form-data">
            <div className="row box-div">
              <div className="col col-12 col-lg-12">
                <div className="input-group mb-3">
                  <span className="input-group-text">Title</span>
                  <input
                    type="text"
                    name="blogTitle"
                    onChange={handelOnType}
                    className="form-control"
                    aria-describedby="blogTitle"
                  />
                </div>
              </div>
              <div className="col col-12 col-lg-12">
                <span className="input-group-text">Description</span>
                <div className="input-group mb-3 w-100">
                  <DefaultEditor
                    value={blogData.blogDesciption} 
                    name="blogDesciption"
                    onChange={handelOnType}
                    className="lmtextEditor"
                    placeholder="Write an article..."
                    // value={contentItemContext?.contentTitle}
                  />
                </div>
              </div>
              <div className="col col-12 col-lg-12">
                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupFile01"
                  >
                    Image Upload
                  </label>
                  <input
                    type="file"
                    name="blogPostImage"
                    onChange={handleOnSelectImage}
                    className="form-control"
                    id="inputGroupFile01"
                    accept="image/*,.pdf"
                  />
                </div>
              </div>
              <div className="col col-12 col-lg-12">
                <button className="upload-btn" type="submit">
                  Add Blog
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogComponent;
