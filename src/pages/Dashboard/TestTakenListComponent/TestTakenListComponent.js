import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getCookie } from "../../../utilities/helper";
import "./TestList.css";

const TestTakenListComponent = () => {
  const [testTakenListData, settestTakenListData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  //page button er jonnno
  const [page, setPage] = useState(0);

  //load data
  let size = 10;
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_URL_API}/api/test-taken-list-dashboard?page=${page}&&size=${size}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        settestTakenListData(data.finalResult);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  console.log(page);
  console.log("pageCount", pageCount);
  return (
    <div className="dashboard-main">
      <div className="row">
        <div className="col col-12 col-lg-12">
          <div className="table-responsive box-div mt-4">
            <table className="table table-border align-items-center">
              <thead className="tbl-thead">
                <tr>
                  <th>Sr</th>
                  <th>Test ID</th>
                  <th>User UD</th>
                  <th>Date-Time</th>
                  <th>IQ score</th>
                  <th>Visual</th>
                  <th>Abstract</th>
                  <th>Pattern</th>
                  <th>Spatial</th>
                  <th>Analytic</th>
                </tr>
              </thead>
              <tbody>
                {testTakenListData.map((data, index) => (
                  <tr key={data._id}>
                    <td>{page * 10 + index}</td>
                    <td>{data._id}</td>
                    <td>{data.user_id}</td>
                    <td>
                      {new Date(data.createdAt).toISOString().substr(0, 10)}
                    </td>
                    <td>{data.iqScore}</td>
                    <td>{data.visual}</td>
                    <td>{data.abstract}</td>
                    <td>{data.pattern}</td>
                    <td>{data.spatial}</td>
                    <td>{data.analytic}</td>
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

export default TestTakenListComponent;
