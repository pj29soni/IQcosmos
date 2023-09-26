import React, { useEffect, useState } from "react";
import Select from "react-select";
import { BiImageAdd } from "react-icons/bi";
import "./testUploadForm.css";
import { getCookie, isAuth } from "../../../utilities/helper";
import { useNavigate, useParams } from "react-router-dom";
import useTestDetails from "../../../hooks/useTestDetails";

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
const TestUploadEditComponent = () => {
  const [category, setCategory] = useState(null);
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

  let { id } = useParams();

  const [
    testSingleData,
    setTestSingleData,
    correctAnswerIndex,
    setCorrectAnserIndex,
  ] = useTestDetails();

  //work foe edit
  const handleOnSelect = (category) => {
    /* const field = e.name;
    const value = e.value;
    const newData = { ...category };
    newData[field] = value;
    setCategory(newData); */
    setCategory(category);
  };

  const [questionImg, setQuestionImg] = useState([null]);
  const [answerImg, setAnswerImg] = useState([null]);

  const [questionImgData, setquestionImgData] = useState(null);

  const [imgAnswerData0, setImgAnswerData0] = useState(null);

  const [imgAnswerData1, setImgAnserData1] = useState(null);

  const [imgAnswerData2, setImgAnswerData2] = useState(null);

  const [imgAnswerData3, setImgAnswerData3] = useState(null);

  const [imgAnswerData4, setImgAnswerData4] = useState(null);

  const [imgAnswerData5, setImgAnswerData5] = useState(null);
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
        setquestionImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage0") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgAnswerData0(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage1") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgAnserData1(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage2") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgAnswerData2(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage3") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgAnswerData3(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage4") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgAnswerData4(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "answerimage5") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgAnswerData5(reader.result);
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

  //work for upload data and send server
  //code for defaulte check,,,,,,,,,,,,,,,,,,

  //code for defaulte check,,,,,,,,,,,,,,

  const [indexNumber, setIndexNumber] = useState(0);
  useEffect(() => {
    setIndexNumber(correctAnswerIndex);
  }, [correctAnswerIndex]);

  const [correctAnswer, setCorrectAnswer] = useState("");
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const handleCorrectAnswerChange = (e, index, no) => {
    // e.preventDefault();
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setIndexNumber(no);

      setCorrectAnswer(index);
      setCheckboxStatus(e.target.checked);
    }
  };
  console.log(checkboxStatus);
  const navigate = useNavigate();
  const defaultOption = options.find(
    (option) => option.value === testSingleData?.category
  );
  const handelFormSubmit = (e) => {
    e.preventDefault();
    // test data
    //setIsLoading(true);

    const testUploadedData = {
      ...testUploadData,
    };

    let formData = new FormData();
    for (let item in testUploadedData) {
      if (
        item === "answerimage0" ||
        item === "answerimage1" ||
        item === "answerimage2" ||
        item === "answerimage3" ||
        item === "answerimage4" ||
        item === "answerimage5"
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
    if (category !== null) {
      formData.set("category", category.value);
    }

    formData.append("id", id);

    fetch(`${process.env.REACT_APP_URL_API}/api/test-edit-data-submit`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/dashboard", { replace: true });
        }
      })

      .then((data) => {
        if (data) {
          setTestUploadData("");
          setquestionImgData("");

          setImgAnswerData0("");
          setImgAnserData1("");
          setImgAnswerData2("");
          setImgAnswerData3("");
          setImgAnswerData4("");
          setImgAnswerData5("");
          navigate("/dashboard/test-list", { replace: true });
        }
      });

    e.preventDefault();
  };

  return (
    <div className="test-form text-center">
      <div className="test-upload-form mx-auto w-75">
        <h2 className="form-title">Upload Test Edit</h2>
        <form onSubmit={handelFormSubmit}>
          <div className="py-3 mx-auto">
            <Select
              styles={customStyles}
              options={options}
              onChange={handleOnSelect}
              className="select-option"
              value={category || defaultOption}
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
                  {testSingleData?.questionImage !== undefined ? (
                    <img
                      src={
                        questionImgData
                          ? questionImgData
                          : testSingleData?.questionImage
                      }
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
                    {testSingleData?.options !== undefined ? (
                      <img
                        src={
                          imgAnswerData0
                            ? imgAnswerData0
                            : testSingleData?.options[0]
                        }
                        className="a-thumb mx-auto border img-fluid"
                        alt="user profile"
                      />
                    ) : (
                      <BiImageAdd />
                    )}

                    <input
                      type="file"
                      name="answerimage0"
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
                  htmlFor="2"
                >
                  Select correct
                </label>
                <input
                  id="2"
                  type="checkbox"
                  name="correctAnswer"
                  onChange={(e) =>
                    handleCorrectAnswerChange(e, "answerimage0", 0)
                  }
                  checked={indexNumber === 0 ? true : false}
                />
              </div>
            </div>

            <div className="row mt-3 ans-dv">
              <div className="col col-4 col-lg-4">
                <div className="a-photo-upload">
                  <label htmlFor="file_upload border">
                    {testSingleData?.options !== undefined ? (
                      <img
                        src={
                          imgAnswerData1
                            ? imgAnswerData1
                            : testSingleData?.options[1]
                        }
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
                <h2 className="mt-2">Upload Answer image 2</h2>

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
                  onChange={(e) =>
                    handleCorrectAnswerChange(e, "answerimage1", 1)
                  }
                  checked={indexNumber === 1 ? true : false}
                />
              </div>
            </div>

            <div className="row mt-3 ans-dv">
              <div className="col col-4 col-lg-4">
                <div className="a-photo-upload">
                  <label htmlFor="file_upload border">
                    {testSingleData?.options !== undefined ? (
                      <img
                        src={
                          imgAnswerData2
                            ? imgAnswerData2
                            : testSingleData?.options[2]
                        }
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
                <h2 className="mt-2">Upload Answer image 3</h2>

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
                  onChange={(e) =>
                    handleCorrectAnswerChange(e, "answerimage2", 2)
                  }
                  checked={indexNumber === 2 ? true : false}
                />
              </div>
            </div>

            <div className="row mt-3 ans-dv">
              <div className="col col-4 col-lg-4">
                <div className="a-photo-upload">
                  <label htmlFor="file_upload border">
                    {testSingleData?.options !== undefined ? (
                      <img
                        src={
                          imgAnswerData3
                            ? imgAnswerData3
                            : testSingleData?.options[3]
                        }
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
                <h2 className="mt-2">Upload Answer image 4</h2>

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
                  onChange={(e) =>
                    handleCorrectAnswerChange(e, "answerimage3", 3)
                  }
                  checked={indexNumber === 3 ? true : false}
                />
              </div>
            </div>

            <div className="row mt-3 ans-dv">
              <div className="col col-4 col-lg-4">
                <div className="a-photo-upload">
                  <label htmlFor="file_upload border">
                    {testSingleData?.options !== undefined ? (
                      <img
                        src={
                          imgAnswerData4
                            ? imgAnswerData4
                            : testSingleData?.options[4]
                        }
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
                <h2 className="mt-2">Upload Answer image 5</h2>

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
                  onChange={(e) =>
                    handleCorrectAnswerChange(e, "answerimage4", 4)
                  }
                  checked={indexNumber === 4 ? true : false}
                />
              </div>
            </div>

            <div className="row mt-3 ans-dv">
              <div className="col col-4 col-lg-4">
                <div className="a-photo-upload">
                  <label htmlFor="file_upload border">
                    {testSingleData?.options !== undefined ? (
                      <img
                        src={
                          imgAnswerData5
                            ? imgAnswerData5
                            : testSingleData?.options[5]
                        }
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
                <h2 className="mt-2">Upload Answer image 6</h2>

                <label
                  className="answer-select mt-2 radio-btn ms-3 me-3"
                  htmlFor="7"
                >
                  Select correct
                </label>
                <input
                  id="7"
                  type="checkbox"
                  name="correctAnswer"
                  onChange={(e) =>
                    handleCorrectAnswerChange(e, "answerimage5", 5)
                  }
                  checked={indexNumber === 5 ? true : false}
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

export default TestUploadEditComponent;
