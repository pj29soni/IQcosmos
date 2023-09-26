import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { BsChevronLeft, BsChevronRight, BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Faq.css";

const FaqComponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editshowb, setEditShow] = useState(false);

    const editClose = () => setEditShow(false);
    const editShow = () => setEditShow(true);

    return (
        <>
        <div className='dashboard-main'>
            <div className='row box-div'>
                <div className="col col-12 col-lg-10 support-lists-bg">
                    <div className="faq-add-box">
                        <button className='faqBtn' onClick={handleShow}>Add New Faq</button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>New FAQ</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <input className='form-control mb-2' placeholder='FAQ Title'/>
                                        <textarea className='form-control' placeholder='Faq Description'>
                                            
                                        </textarea>
                                        <Modal.Footer>
                                            <button className='closeBtn' onClick={handleClose}>
                                                Close
                                            </button>
                                            <button className='saveBtn' onClick={handleClose}>
                                                Add FAQ
                                            </button>
                                        </Modal.Footer>
                                    </form>
                                </Modal.Body>
                                
                            </Modal>

                            <Modal show={editshowb} onHide={editClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Edit FAQ</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <input className='form-control mb-2' placeholder='FAQ Title'/>
                                        <textarea className='form-control' placeholder='Faq Description'>
                                            
                                        </textarea>
                                        <Modal.Footer>
                                            <button className='closeBtn' onClick={editClose}>
                                                Close
                                            </button>
                                            <button className='saveBtn' onClick={editClose}>
                                                Update FAQ
                                            </button>
                                        </Modal.Footer>
                                    </form>
                                </Modal.Body>
                                
                            </Modal>


                    </div>
                    <div className="support-lists-box">
                        <div className="support-list">
                            <div className='support-head'>
                                <Link to={`/`}>
                                    <h1>FAQ Title</h1>
                                </Link>
                                <div className='support-action'>
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
                                            <button className='editBtn' onClick={editShow}>Edit</button> 
                                            <button className='delBtn'>Delete</button>
                                        </span>
                                    </td>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum!</p>

                            
                        </div>
                    </div>

                    <div className="support-lists-box">
                        <div className="support-list">
                            <div className='support-head'>
                                <Link to={`/`}>
                                    <h1>FAQ Title</h1>
                                </Link>
                                <div className='support-action'>
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
                                            <button className='editBtn' onClick={editShow}>Edit</button> 
                                            <button className='delBtn'>Delete</button>
                                        </span>
                                    </td>
                                </div>
                            </div>
                            <p>Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid.</p>
                            
                        </div>
                    </div>

                    <div className="support-lists-box">
                        <div className="support-list">
                            <div className='support-head'>
                                <Link to={`/`}>
                                    <h1>FAQ Title</h1>
                                </Link>
                                <div className='support-action'>
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
                                            <button className='editBtn' onClick={editShow}>Edit</button> 
                                            <button className='delBtn'>Delete</button>
                                        </span>
                                    </td>
                                </div>
                            </div>
                            <p>Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid.</p> 
                              
                        </div>
                    </div>

                    <div className="support-lists-box">
                        <div className="support-list">
                            <div className='support-head'>
                                <Link to={`/`}>
                                    <h1>FAQ Title</h1>
                                </Link>
                                <div className='support-action'>
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
                                            <button className='editBtn' onClick={editShow}>Edit</button> 
                                            <button className='delBtn'>Delete</button>
                                        </span>
                                    </td>
                                </div>
                            </div>
                            <p>Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! </p>
                        </div>
                    </div>

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

                <div className="col col-12 col-lg-2 d-none"></div>
            </div>
        </div>
    </>
    );
};

export default FaqComponent;