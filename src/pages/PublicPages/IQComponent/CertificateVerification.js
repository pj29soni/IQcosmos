import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

export default function CertificateVerification(props) {

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
    }

    const ContactFormSchema = Yup.object().shape({
        first_name: Yup.string()
            .trim()
            .required('Required.'),
        last_name: Yup.string()
            .trim()
            .required('Required.'),
        email: Yup.string()
            .email('Invalid email address.')
            .trim()
            .required('Required.'),
    })

    const submitHandler = async (userParams, { resetForm }) => {
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL_API}/api/certificate/send-otp`,
            data: userParams,
        })
            .then((response) => {
                if (response?.data?.status) {
                    props?.verificationHandler(true);
                    props?.userInfo(userParams);
                    resetForm();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="row">
            <div className="col col-12 col-lg-12 p-4">
                <div className="form-title">
                    <h3>Fill the details and verify first</h3>
                </div>
                <div className="contact-form mt-3">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={ContactFormSchema}
                        onSubmit={(values, { resetForm }) => {
                            submitHandler(values, { resetForm });
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form autoComplete="off">
                                <div className="row mb-4">
                                    <div className="col col-12 col-lg-6 mb-2">
                                        <label htmlFor="first_name" className="form-label">
                                            First name*
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            placeholder="First name"
                                            name='first_name'
                                        />
                                        <div className='errorMsg'>
                                            <p className='m-0 text-danger text-end pe-2'>
                                                {errors.first_name && touched.first_name ? (errors.first_name) : null}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-lg-6 mb-2">
                                        <label htmlFor="last_name" className="form-label">
                                            Last name*
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            placeholder="Last name"
                                            name="last_name"
                                        />
                                        <div className='errorMsg'>
                                            <p className='m-0 text-danger text-end pe-2'>
                                                {errors.last_name && touched.last_name ? (errors.last_name) : null}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col col-12 col-lg-6 mb-2">
                                        <label htmlFor="email" className="form-label">
                                            Email*
                                        </label>
                                        <Field
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            name='email'
                                        />
                                        <div className='errorMsg'>
                                            <p className='m-0 text-danger text-end pe-2'>
                                                {errors.email && touched.email ? (errors.email) : null}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-start'>
                                    <div className='text-center'>
                                        <button type='submit' className="btn btn-dark w-100 font-weight-bold mt-2 p-2">Send OTP</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
