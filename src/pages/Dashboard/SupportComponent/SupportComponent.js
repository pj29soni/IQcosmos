import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Support.css";

const SupportComponent = () => {
  const [show, setShow] = useState(false);
  const notify = () => toast("delete successfully.");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [supportList, setSupportList] = useState([]);
  const [supportDetails, setSupportListDetails] = useState({});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/support-message-list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSupportList(data);
      });
  }, []);

  const details = (id) => {
    fetch(
      `${process.env.REACT_APP_URL_API}/api/show-support-message-by-id/?id=${id}`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
        }
      })
      .then((data) => {
        //localStorage.setItem("car", JSON.stringify(data));
        setSupportListDetails(data.email);
      });
  };

  //reply system
  const [replayData, setReplayData] = useState({});
  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newIqTestUserResult = { ...replayData, email: supportDetails };
    newIqTestUserResult[field] = value;

    setReplayData(newIqTestUserResult);
  };

  const submitReplay = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_URL_API}/api/post-reply-to-user`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(replayData),
    }).then((response) => {
  
      response.json();
      handleClose();
    });
  };

  //delete
  const deletesupport = (id) => {
    
    fetch(
      `${process.env.REACT_APP_URL_API}/api/delete-support-message/?id=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
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
          const remainingRentRequest = supportList.filter(
            (restRequest) => restRequest._id !== id
          );
          setSupportList(remainingRentRequest);
          notify()
        }
      });
  };

  return (
    <>
      <div className="dashboard-main">
      <ToastContainer />
        <div className="row box-div">
          <div className="col col-12 col-lg-10 support-lists-bg">
            <div className="lists-title-number">
              <h2>
                Number of supports: <span>{supportList.length}</span>
              </h2>
            </div>

            {supportList.map((support) => (
              <div key={support._id} className="support-lists-box">
                <div className="support-list">
                  <div className="support-head">
                    <Link to={`/`}>
                      <h1>{support.subject}</h1>
                    </Link>
                    <div className="support-action">
                      {/* <td>
                <Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                    />
                </Form>
            </td> */}
                      <td>
                        <span className="actionBtn">
                          <button
                            className="editBtn"
                            onClick={() => {
                              handleShow();
                              details(support._id);
                            }}
                          >
                            Reply
                          </button>
                          <button
                            className="delBtn"
                            onClick={() => deletesupport(support._id)}
                          >
                            Delete
                          </button>
                        </span>
                      </td>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Support Reply</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <form onSubmit={submitReplay}>
                            {/*  <input
                              className="form-control mb-2"
                              placeholder="Email"
                              name="email"
                              onChange={handelOnBlur}
                            /> */}
                            <input
                              className="form-control mb-2"
                              placeholder="Subject"
                              name="subject"
                              onChange={handelOnBlur}
                            />
                            <textarea
                              className="form-control"
                              placeholder="Message"
                              name="message"
                              onChange={handelOnBlur}
                            ></textarea>
                            <Modal.Footer>
                              <button
                                className="closeBtn"
                                onClick={handleClose}
                              >
                                Close
                              </button>
                              <button
                                className="saveBtn"
                                onClick={submitReplay}
                              >
                                Send
                              </button>
                            </Modal.Footer>
                          </form>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                  <p>{support.message}</p>
                  <h3>Name· {support.name}</h3>
                </div>
              </div>
            ))}

          {/*   <nav className="d-flex lm-pagination">
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link" aria-label="Previous">
                    <BsChevronLeft />
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link lmp-active">1</button>
                </li>
                <li className="page-item">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item">
                  <button className="page-link">3</button>
                </li>
                <li className="page-item">
                  <button className="page-link" aria-label="Next">
                    <BsChevronRight />
                  </button>
                </li>
              </ul>
            </nav> */}
          </div>

          <div className="col col-12 col-lg-2 d-none"></div>
        </div>
      </div>
    </>
  );
};

export default SupportComponent;
