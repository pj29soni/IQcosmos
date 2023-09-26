import React from 'react';
import { Accordion } from 'react-bootstrap';
import IQCertificate from '../IQCertificate.js';
import moment from 'moment';

export default function CertificateList(props) {

    const certificates = props?.certificates;

    console.log(certificates)
    return (
        <Accordion>
            {
                certificates?.map((certificate, index) => (
                    <Accordion.Item key={index} eventKey={index}>
                        <Accordion.Header>{`${certificate?.user_id?.firstname} ${certificate?.user_id?.lastname}`} <span className='text-muted'><em className='ps-5'>Certificate generated on {moment(certificate?.createdAt).format('MMMM Do YYYY, hh:mm:ss A')} <em/></em></span></Accordion.Header>
                        <Accordion.Body>
                            <IQCertificate certificate={certificate} index={index} />
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    )
}
