import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getCookie, isAuth } from "../utilities/helper";

const useTestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser, isLoading, setIsLoading] = useState(isAuth());
  //setIsLoading(true);
  //set data in services
  const [testSingleData, setTestSingleData] = useState([]);
  const [correctAnswerIndex, setCorrectAnserIndex] = useState(0);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/test-data-edit/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/dashboard/upload-edit-system", { replace: true });
        }
      })
      .then((data) => {
        setCorrectAnserIndex(data?.constCorrectAnswerIndex);
        setTestSingleData(data.result);

        //setIsLoading(false);
      });
  }, [id, correctAnswerIndex]);
  //fetch data from db

  return [
    testSingleData,
    setTestSingleData,
    correctAnswerIndex,
    setCorrectAnserIndex,
  ];
};

export default useTestDetails;
