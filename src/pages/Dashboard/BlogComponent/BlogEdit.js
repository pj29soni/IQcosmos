import React, { useEffect, useState } from "react";
import { DefaultEditor } from "react-simple-wysiwyg";
import "./Blog.css";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../../utilities/helper";
import axios from "axios";
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const BlogEdit = () => {
  const [blogData, setBlogData] = useState([]);
  const [blogEditData, setBlogEditData] = useState(blogData);
  const [imgData1, setImgData1] = useState(null);
  const id = useParams();
  console.log("cc", blogData);
  console.log("blogEditData",blogEditData)
  
  //get data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/blog-details?id=${id.id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setBlogData(data);
      });
  }, [id]);
  const navigate = useNavigate();

  const handelOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...blogEditData };
    newData[field] = value;
    setBlogEditData(newData);
    
  };
  const handleOnSelectImage = (e) => {
    const field = e.target.name;
    console.log('field', field);
    
    const file = e.target.files[0];
    let postid = uuidv4();
    let { type, name } = file;
    let namesplit = name.split('.');
    let nameExtension = namesplit[namesplit.length - 1];
    let blob = file.slice(0, file.size, type);
    let newFile = new File([blob], `${postid}_post.${nameExtension}`, {
      type: type,
    });
  
    if (field === 'blogPostImage') {
      console.log('Uploading');
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const newData = { ...blogEditData };
        newData[field] = reader.result;
        setBlogEditData(newData);
      });
      reader.readAsDataURL(newFile); // Use the modified file
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
  
      if (blogEditData.blogTitle !== undefined) {
        formData.append('blogTitle', blogEditData.blogTitle);
      }
      if (blogEditData.blogDesciption !== undefined) {
        formData.append('blogDesciption', blogEditData.blogDesciption);
      }
      if (blogEditData.blogPostImage !== undefined) {
        formData.append('blogPostImage', blogEditData.blogPostImage);
      }
  
      const response = await axios.put(
        `${process.env.REACT_APP_URL_API}/api/blog-update/?id=${id.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${getCookie('token')}`,
           
          },
        }
      );
  
      if (response.status === 200) {
        navigate("/dashboard/blog-list", { replace: true });
        // Handle navigation or state update as needed
      } else {
        console.error('Error updating blog');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  return (
    <>
      <div className="test-form">
        <div className="test-upload-form mx-auto w-75">
          <h2 className="form-title text-center">Edit Blog</h2>
          <form onSubmit={handleSubmit} >
            <div className="row box-div">
              <div className="col col-12 col-lg-12">
                <div className="input-group mb-3">
                  <span className="input-group-text">Title</span>
                  <input
                    type="text"
                    defaultValue={blogData.blogTitle}
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
                    value={blogEditData.blogDesciption || blogData.blogDesciption} 
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
                  <div className="col col-12 col-lg-4">
                    <div className="blog-iq-img">
                      <div className="image-wrapper">
                        {blogEditData?.blogPostImage  ? (
                          <img src={ blogEditData?.blogPostImage} alt="Preview" />
                        ) :blogData.blogPostImage ?
                        ( <img src={ blogData?.blogPostImage} alt="Preview" />)
                        :
                        (
                          <div className="placeholder">Preview</div>
                        )}
                      </div>
                    </div>
                  </div>
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
                <button className="upload-btn" onClick={handleSubmit} type="submit">
                  Save Blog
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogEdit;
