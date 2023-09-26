import React from 'react';
import { Link } from 'react-router-dom';

export default function IQDownload() {
    return (
        <div className='container-fluid cerificateDwndBg mt-4 text-center'>
            <h2 className='iqTag'>Download your <span className='iqTagOrange'> IQ Certificate</span></h2>
            <div className='mt-5'>
                <Link to={'/download-cerificate'} className="downloadBtn">Download</Link>
            </div>
        </div>
    )
}
