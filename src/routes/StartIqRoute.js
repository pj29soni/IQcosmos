import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const StartIqRoute = ({ children }) => {
    const {iqTestUserResult, isLoading} = useAuth();

    const location = useLocation();
    if (isLoading) {
        return (
            <div>
                <h1>loading...</h1>
            </div>
        );
    }
    return iqTestUserResult?.firstname ? (
        children
    ) : (
        <Navigate to="/user-information" replace state={{ from: location }} />
    );
};

export default StartIqRoute;