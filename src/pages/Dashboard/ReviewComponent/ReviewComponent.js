import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { BsChevronLeft, BsChevronRight, BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

import "./Review.css";

const ReviewComponent = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='dashboard-main'>
            <div className='row'>
                <div className='col col-12 col-lg-12'>
                    <div className="table-responsive box-div mt-4">
                        
                        <table className="table table-border align-items-center">
                            <thead className="tbl-thead">
                                <tr>
                                    <th>Sr</th>
                                    <th>Userid</th>
                                    <th>Fname</th>
                                    <th>Lname</th>
                                    <th>Review</th>
                                    <th>CreatedDate</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>User001</td>
                                    <td>Hitesh</td>
                                    <td>Patel</td>
                                    <td>IQ Cosmos is really great website. I have check MY IQ and it give me immense pleasure.</td>
                                    <td>2023-01-24 18:50:48</td>
                                    <td>
                                        <Form>
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <span className='actionBtn'>                       
                                            <button className='editBtn' onClick={handleShow}>Edit</button> 
                                            <button className='delBtn'>Delete</button>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Review</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <textarea className='form-control'>
                                            IQ Cosmos is really great website. I have check MY IQ and it give me immense pleasure.
                                        </textarea>
                                        <Modal.Footer>
                                            <button className='closeBtn' onClick={handleClose}>
                                                Close
                                            </button>
                                            <button className='saveBtn' onClick={handleClose}>
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
                                    <button className="page-link" aria-label="Previous">
                                        <BsChevronLeft/>
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
                                        <BsChevronRight/>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewComponent;