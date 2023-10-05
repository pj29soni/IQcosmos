import React, { useState } from 'react';
import PublicTopHeaderComponent from '../PublicTopHeaderComponent';
import IQFooterComponent from '../HomePageComponent/IQFooterComponent';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import CertificateVerification from './CertificateVerification';
import CertificateList from './CertificateList';

export default function DownloadCerificate() {

    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isVerifiedUser, setIsVerifiedUser] = useState(false);
    const [user, setUser] = useState();
    const [errorMsg, setErrorMsg] = useState('');
    const [certificates, setCertificates] = useState([]);

    const verificationHandler = (verificationStatus) => {
        setIsOtpSent(verificationStatus)
    }

    const userInfoHandler = (userParams) => {
        setUser(userParams)
    }

    const initialValues = {
        otp: '',
    }

    const OtpFormSchema = Yup.object().shape({
        otp: Yup.string()
            .min(6)
            .max(6)
            .trim()
            .required('Required.'),
    })

    const submitHandler = async (userParams, { resetForm }) => {
        let params = {
            email: user?.email,
            otp: userParams?.otp
        }
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL_API}/api/certificate/verify-otp`,
            data: params,
        })
            .then((response) => {
                if (response?.data?.status) {
                    resetForm();
                    setCertificates(response?.data?.data)
                    setIsVerifiedUser(true);
                    setErrorMsg('');
                } else {
                    setErrorMsg(response?.data?.message)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <PublicTopHeaderComponent />
            <div className="container-fluid bg-white">
                <div className="container">
                    {
                        isOtpSent ? (
                            <div>
                                <div className="row">
                                    <div className="col col-12 col-lg-12 p-4">
                                        <div className="form-title">
                                            <h3>Verify with OTP</h3>
                                        </div>
                                        <div className="contact-form mb-5 mt-3 pt-3">
                                            <div className='pb-3 btn-back' onClick={() => setIsOtpSent(false)}>
                                                🡨 Back
                                            </div>
                                            <Formik
                                                initialValues={initialValues}
                                                validationSchema={OtpFormSchema}
                                                onSubmit={(values, { resetForm }) => {
                                                    submitHandler(values, { resetForm });
                                                }}
                                            >
                                                {({ errors, touched }) => (
                                                    <Form autoComplete="off">
                                                        <div className="row">
                                                            <div className="col col-12 col-lg-6 mb-2">
                                                                <label htmlFor="otp" className="form-label">
                                                                    OTP*
                                                                </label>
                                                                <Field
                                                                    type="number"
                                                                    className="form-control"
                                                                    placeholder="OTP"
                                                                    name='otp'
                                                                    min={1}
                                                                />
                                                                <div className='errorMsg'>
                                                                    <p className='m-0 text-danger text-end pe-2'>
                                                                        {errors.otp && touched.otp ? (errors.otp) : null}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='errorMsg'><p className='m-0 text-danger'>{errorMsg}</p></div>
                                                        <div className='d-flex justify-content-start'>
                                                            <div className='text-center'>
                                                                <button type='submit' className="btn btn-dark w-100 font-weight-bold mt-2 p-2">Verify</button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                                {
                                    isVerifiedUser && (
                                        <div className='pb-5 pt-3'>
                                            <div className="form-title">
                                                <h3>Certificates</h3>
                                            </div>
                                            {
                                                certificates?.length > 0 ? (
                                                    <div className='mt-4'>
                                                        <CertificateList certificates={certificates} />
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <p className='mt-3 text-muted text-center'>There is no certificate with email <span className='text-dark'>{user?.email}</span></p>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        ) : (
                            <CertificateVerification verificationHandler={verificationHandler} userInfo={userInfoHandler} />
                        )
                    }
                </div>
            </div>
            <IQFooterComponent />
        </>
    )
}
