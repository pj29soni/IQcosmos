import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getCookie } from "../../../utilities/helper";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import "./UserManager.css";

const UserManagerComponent = () => {
  const [userList, setUserList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  //page button er jonnno
  const [page, setPage] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  //load data
  let size = 10;

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_URL_API}/api/iq-test-atempt-user-list?page=${page}&&size=${size}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/dashboard", { replace: true });
        }
      })
      .then((data) => {
        setUserList(data.finalResult);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        //setIsLoading(false);
      });
  }, [page]);

  return (
    <div className="dashboard-main">
      <div className="row">
        <div className="col col-12 col-lg-12">
          <div className="table-responsive box-div mt-4">
            <table className="table table-border align-items-center">
              <thead className="tbl-thead">
                <tr>
                  <th>User ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Mobile</th>
                  <th>Status</th>

                  <th>CreateDate</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((data) => (
                  <tr key={data._id}>
                    <td>{data._id}</td>

                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.email}</td>
                    <td>{data.country}</td>
                    <td>{data.city}</td>
                    <td>{data.mobile}</td>
                    <td>Good</td>

                    <td>
                      {" "}
                      {new Date(data.updatedAt).toISOString().substr(0, 10)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav className="d-flex lm-pagination">
              <ul className="pagination">
                <li className="page-item">
                  {page === 0 ? (
                    <button
                      className="page-link"
                      aria-label="Previous"
                      disabled
                    >
                      <BsChevronLeft />
                    </button>
                  ) : (
                    <button
                      className="page-link"
                      aria-label="Previous"
                      onClick={() => setPage(page - 1)}
                    >
                      <BsChevronLeft />
                    </button>
                  )}
                </li>
                {[...Array(pageCount).keys()].map((number) => (
                  <li className="page-item" key={number}>
                    <button
                      className="page-link lmp-active"
                      onClick={() => setPage(number)}
                    >
                      {number + 1}
                    </button>
                  </li>
                ))}
                <li className="page-item">
                  {page + 1 === pageCount ? (
                    <button className="page-link" aria-label="Next" disabled>
                      <BsChevronRight />
                    </button>
                  ) : (
                    <button
                      className="page-link"
                      aria-label="Next"
                      onClick={() => setPage(page + 1)}
                    >
                      <BsChevronRight />
                    </button>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagerComponent;
