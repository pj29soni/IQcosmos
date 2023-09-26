import React, { useState } from "react";
import Select from "react-select";
import { BiImageAdd } from "react-icons/bi";
import "./testUploadForm.css";
import { getCookie } from "../../../utilities/helper";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
const TestUploadComponent = () => {
  const [category, setCategory] = useState("");
  const options = [
    {
      value: "Visual Perception",
      label: "Visual Perception",
      name: "category",
    },
    {
      value: "Abstract Reasoning",
      label: "Abstract Reasoning",
      name: "category",
    },
    {
      value: "Pattern Recognition",
      label: "Pattern Recognition",
      name: "category",
    },
    {
      value: "Spatial Orientation",
      label: "Spatial Orientation",
      name: "category",
    },
    {
      value: "Analytical Thinking",
      label: "Analytical Thinking",
      name: "category",
    },
  ];
  const handleOnSelect = (e) => {
    const field = e.name;
    const value = e.value;
    const newData = { ...category };
    newData[field] = value;
    setCategory(newData);
  };

  const [questionImg, setQuestionImg] = useState([null]);
  const [answerImg, setAnswerImg] = useState([null]);

  const [questionImgData1, setquestionImgData1] = useState(null);

  const [imgData2, setImgData2] = useState(null);

  const [imgData3, setImgData3] = useState(null);

  const [imgData4, setImgData4] = useState(null);

  const [imgData5, setImgData5] = useState(null);

  const [imgData6, setImgData6] = useState(null);

  const [imgData1, setImgData1] = useState(null);
  const [testUploadData, setTestUploadData] = useState("");
  const handleOnType = (e) => {
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
    const newData = { ...testUploadData };
    newData[field] = newFile;
    setTestUploadData(newData);
    //new image upload preview system
    if (field === "questionImage") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setquestionImgData1(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage1") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData1(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage2") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData2(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage3") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData3(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage4") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData4(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage5") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData5(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage6") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData6(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#eaecf0",

      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "#eaecf0",
      },
    }),
  };

  const handleQuestionFileChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let newQuestionImg = [...questionImg];
      newQuestionImg[index] = e.target.result;
      setQuestionImg(newQuestionImg);
    };
    reader.readAsDataURL(file);
  };

  const handleAnswerFileChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let newAnswerImg = [...answerImg];
      newAnswerImg[index] = e.target.result;
      setAnswerImg(newAnswerImg);
    };
    reader.readAsDataURL(file);
  };
  const { isLoading, setIsLoading } = useAuth();
  //corerect answe work
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const handleCorrectAnswerChange = (e, index) => {
    // e.preventDefault();
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setCorrectAnswer(index);
      setCheckboxStatus(e.target.checked);
    }
  };
  console.log(checkboxStatus);
  //work for upload data and send server

  const navigate = useNavigate();

  const handelFormSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (category.category === undefined) {
      alert("please select the categorey");
      return;
    }
    if (
      imgData1 === null ||
      imgData2 === null ||
      imgData3 === null ||
      imgData4 === null ||
      imgData5 === null ||
      imgData6 === null
    ) {
      alert("please upload all answer image");
      return;
    }
    if (questionImgData1 === null) {
      alert("please upload question image");
      return;
    }
    if (correctAnswer === "") {
      alert("please select correct answer image");
      return;
    }
    // test data
    const testUploadedData = {
      ...testUploadData,
      category,
    };
    console.log("correct", correctAnswer);
    console.log("category", category);
    let formData = new FormData();
    for (let item in testUploadedData) {
      if (item === "category") {
        formData.append("category", testUploadedData[item].category);
        continue;
      }
      if (
        item === "answerimage1" ||
        item === "answerimage2" ||
        item === "answerimage3" ||
        item === "answerimage4" ||
        item === "answerimage5" ||
        item === "answerimage6"
      ) {
        formData.append(item, testUploadedData[item]);

        continue;
      }
      if (item === "questionImage") {
        formData.append("questionImage", testUploadedData[item]);
        continue;
      }
    }
    formData.append("correctAnswer", correctAnswer);

    fetch(`${process.env.REACT_APP_URL_API}/api/iq-bank-upload`, {
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
          setTestUploadData("");
          setquestionImgData1("");
          setImgData1("");
          setImgData2("");
          setImgData3("");
          setImgData4("");
          setImgData5("");
          setImgData6("");
          setCorrectAnswer("");
          setCategory("");
          setIsLoading(false);
          navigate("/dashboard/upload-system", { replace: true });
        }
      });

    e.preventDefault();
  };

  return (
    <div className="test-form text-center">
      <div className="test-upload-form mx-auto w-75">
        <h2 className="form-title">Upload Test</h2>
        <form onSubmit={handelFormSubmit} encType="multipart/form-data">
          <div className="py-3 mx-auto">
            <Select
              styles={customStyles}
              options={options}
              onChange={handleOnSelect}
              isClearable
              className="select-option"
            />
          </div>

          {/* <div className='question-aria d-flex flex-wrap justify-content-center'>
                        {[...Array(1).keys()].map((index) => (
                            <div className='py-2 d-flex align-items-center' key={index}>
                                <div>
                                    <label className='test-image-btn' htmlFor={index + "q"}>Upload Question Image {index + 1}</label>
                                    <input id={index + "q"} className='image-input' type="file" onChange={(e) => handleQuestionFileChange(e, index)} />
                                </div>
                                {questionImg[index] && <img className='question-img-preview img-thumbnail ms-3 rounded-3' src={questionImg[index]} alt="Preview" />}
                            </div>
                        ))}

                        <div className='py-2 d-flex align-items-center'>
                            <div>
                                <h4>Upload Question Image</h4>
                            </div>
                            
                        </div>
                        
                    </div> */}

          <div className="row box-div">
            <div className="col col-4 col-lg-3">
              <div className="q-photo-upload">
                <label htmlFor="file_upload border">
                  {questionImgData1 ? (
                    <img
                      src={questionImgData1}
                      className="q-thumb rounded mx-auto border img-fluid"
                      alt="user profile"
                    />
                  ) : (
                    <BiImageAdd />
                  )}

                  <input
                    type="file"
                    name="questionImage"
                    onChange={handleOnType}
                    id="file_upload"
                    accept="image/*,.pdf"
                  />
                </label>
              </div>
            </div>

            <div className="col col-8 col-lg-9 upload-title">
              <h2 className="mt-2">Upload Question Image</h2>
            </div>
          </div>

          <div className="mt-4 box-div">
            <div className="row mt-3 ans-dv">
              <div className="col col-4 col-lg-4">
                <div className="a-photo-upload">
                  <label htmlFor="file_upload border">
                    {imgData1 ? (
                      <img
                        src={imgData1}
                        className="a-thumb mx-auto border img-fluid"
                        alt="user profile"
                      />
                    ) : (
                      <BiImageAdd />
                    )}

                    <input
                      type="file"
                      name="answerimage1"
                      onChange={handleOnType}
                      id="file_upload"
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>
              </div>

              <div className="col col-8 col-lg-8 upload-title">
                <h2 className="mt-2">Upload Answer image 1</h2>

                <label
                  className="answer-select mt-2 radio-btn ms-3 me-3"
                  htmlFor="1"
                >
                  Select correct
                </label>
                <input
                  type="checkbox"
                  name="correctAnswer"
                  onChange={(e) => handleCorrectAnswerChange(e, "answerimage1")}
                />
              </div>
            </div>

            <div className="row mt-3 ans-dv">
              <div className="col col-4 col-lg-4">
                <div className="a-photo-upload">
                  <label htmlFor="file_upload border">
                    {imgData2 ? (
                      <img
                        src={imgData2}
                        className="a-thumb mx-auto border img-fluid"
                        alt="user profile"
                      />
                    ) : (
                      <BiImageAdd />
                    )}

                    <input
                      type="file"
                      name="answerimage2"
                      onChange={handleOnType}
                      id="file_upload"
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>
              </div>

              <div className="col col-8 col-lg-8 upload-title">
                <h2 className="mt-2">Upload Answer image 2</h2>

                <label
                  className="answer-select mt-2 radio-btn ms-3 me-3"
                  htmlFor="2"
                >
                  Select correct
                </label>
                <input
                  type="checkbox"
                  name="correctAnswer"
                  onChange={(e) => handleCorrectAnswerChange(e, "answerimage2")}
                />
              </div>
            </div>

            <div className="row mt-3 ans-dv">
              <div className="col col-4 col-lg-4">
                <div className="a-photo-upload">
                  <label htmlFor="file_upload border">
                    {imgData3 ? (
                      <img
                        src={imgData3}
                        className="a-thumb mx-auto border img-fluid"
                        alt="user profile"
                      />
                    ) : (
                      <BiImageAdd />
                    )}

                    <input
                      type="file"
                      name="answerimage3"
                      onChange={handleOnType}
                      id="file_upload"
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>
              </div>

              <div className="col col-8 col-lg-8 upload-title">
                <h2 className="mt-2">Upload Answer image 3</h2>

                <label
                  className="answer-select mt-2 radio-btn ms-3 me-3"
                  htmlFor="3"
                >
                  Select correct
                </label>
                <input
                  id="3"
                  type="checkbox"
                  name="correctAnswer"
                  onChange={(e) => handleCorrectAnswerChange(e, "answerimage3")}
                />
              </div>
            </div>

            <div className="row mt-3 ans-dv">
              <div className="col col-4 col-lg-4">
                <div className="a-photo-upload">
                  <label htmlFor="file_upload border">
                    {imgData4 ? (
                      <img
                        src={imgData4}
                        className="a-thumb mx-auto border img-fluid"
                        alt="user profile"
                      />
                    ) : (
                      <BiImageAdd />
                    )}

                    <input
                      type="file"
                      name="answerimage4"
                      onChange={handleOnType}
                      id="file_upload"
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>
              </div>

              <div className="col col-8 col-lg-8 upload-title">
                <h2 className="mt-2">Upload Answer image 4</h2>

                <label
                  className="answer-select mt-2 radio-btn ms-3 me-3"
                  htmlFor="4"
                >
                  Select correct
                </label>
                <input
                  id="4"
                  type="checkbox"
                  name="correctAnswer"
                  onChange={(e) => handleCorrectAnswerChange(e, "answerimage4")}
                />
              </div>
            </div>

            <div className="row mt-3 ans-dv">
              <div className="col col-4 col-lg-4">
                <div className="a-photo-upload">
                  <label htmlFor="file_upload border">
                    {imgData5 ? (
                      <img
                        src={imgData5}
                        className="a-thumb mx-auto border img-fluid"
                        alt="user profile"
                      />
                    ) : (
                      <BiImageAdd />
                    )}

                    <input
                      type="file"
                      name="answerimage5"
                      onChange={handleOnType}
                      id="file_upload"
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>
              </div>

              <div className="col col-8 col-lg-8 upload-title">
                <h2 className="mt-2">Upload Answer image 5</h2>

                <label
                  className="answer-select mt-2 radio-btn ms-3 me-3"
                  htmlFor="5"
                >
                  Select correct
                </label>
                <input
                  id="5"
                  type="checkbox"
                  name="correctAnswer"
                  onChange={(e) => handleCorrectAnswerChange(e, "answerimage5")}
                />
              </div>
            </div>

            <div className="row mt-3 ans-dv">
              <div className="col col-4 col-lg-4">
                <div className="a-photo-upload">
                  <label htmlFor="file_upload border">
                    {imgData6 ? (
                      <img
                        src={imgData6}
                        className="a-thumb mx-auto border img-fluid"
                        alt="user profile"
                      />
                    ) : (
                      <BiImageAdd />
                    )}

                    <input
                      type="file"
                      name="answerimage6"
                      onChange={handleOnType}
                      id="file_upload"
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>
              </div>

              <div className="col col-8 col-lg-8 upload-title">
                <h2 className="mt-2">Upload Answer image 6</h2>

                <label
                  className="answer-select mt-2 radio-btn ms-3 me-3"
                  htmlFor="6"
                >
                  Select correct
                </label>
                <input
                  id="6"
                  type="checkbox"
                  name="correctAnswer"
                  onChange={(e) => handleCorrectAnswerChange(e, "answerimage6")}
                />
              </div>
            </div>
          </div>

          <div className="py-4">
            <button className="upload-btn" type="submit">
              Upload Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestUploadComponent;
