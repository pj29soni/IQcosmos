import { useState } from "react";
import { getLocalStorage, isAuth } from "../utilities/helper";

const useContextData = () => {
  const [user, setUser] = useState(isAuth());
  const [isLoading, setIsLoading] = useState(false);

  const [authError, setAuthError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const [iqTestUserResult, setIqTestUserResult] = useState({});
  const [iqTestFinalResult, setIqTestFinalResult] = useState({});
  const [visitorCount, setVisitorCount] = useState(0);
const [blogDetails,setBlogDetails] = useState({})
  //car rent upload data state

  return {
    user,
    setUser,
    token,
    isLoading,
    setIsLoading,
    authError,
    setAuthError,
    authSuccess,
    setAuthSuccess,
    admin,
    setAdmin,
    setIqTestUserResult,
    iqTestUserResult,
    iqTestFinalResult,
    setIqTestFinalResult,
    visitorCount,
    setVisitorCount,
    blogDetails,setBlogDetails
  };
};

export default useContextData;
