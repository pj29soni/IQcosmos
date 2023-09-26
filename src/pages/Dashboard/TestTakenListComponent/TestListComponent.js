import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./TestList.css";
import { getCookie } from "../../../utilities/helper";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TestListComponent = () => {
  const [show, setShow] = useState(false);
  const notify = () => toast("delete successfully.");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [testBankListData, setTestBankListData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  //page button er jonnno
  const [page, setPage] = useState(0);

  //load data
  let size = 10;
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_URL_API}/api/test-bank-list-dashboard?page=${page}&&size=${size}`,
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
        setTestBankListData(data.finalResult);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  const deletedataTest = (id) => {
    
    fetch(
      `${process.env.REACT_APP_URL_API}/api/delete-test-list/?id=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } /* else if (response.status === 401) {
            
        } */
      })
      .then((data) => {
        if (data) {
          const remainingRentRequest = testBankListData.filter(
            (restRequest) => restRequest._id !== id
          );
          setTestBankListData(remainingRentRequest);
          notify()
        }
      });
  };
  return (
    <div className="dashboard-main">
      <ToastContainer />
      <div className="row">
        <div className="col col-12 col-lg-8">
          <div className="table-responsive box-div mt-4">
            <table className="table table-border align-items-center">
              <thead className="tbl-thead">
                <tr>
                  <th>Sr</th>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {testBankListData.map((data, index) => (
                  <tr key={data._id}>
                    <td>{page * 10 + index+1}</td>
                    <td>{data._id}</td>
                    <td>
                      {new Date(data.createdAt).toISOString().substr(0, 10)}
                    </td>
                    <td>
                      <button className="editBtn">
                        <Link to={`/dashboard/upload-edit-system/${data?._id}`}>
                          Edit
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button className="delBtn" onClick={()=>deletedataTest(data?._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <input className="form-control mb-3" placeholder="Date" />
                    <Modal.Footer>
                      <button className="closeBtn" onClick={handleClose}>
                        Close
                      </button>
                      <button className="saveBtn" onClick={handleClose}>
                        Save Changes
                      </button>
                    </Modal.Footer>
                  </form>
                </Modal.Body>
              </Modal>
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

export default TestListComponent;
