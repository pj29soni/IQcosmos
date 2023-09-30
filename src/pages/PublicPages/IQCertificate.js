import React from 'react';
import IqLogo from "../../assets/iqcosmos.png";
import IqLogoTransparent from "../../assets/Certificate/logo.png";
import Signature from "../../assets/homepage/signature.png";
import BorderTop from "../../assets/Certificate/border_top.png";
import BorderBottom from "../../assets/Certificate/border_bottom.png";
import IQMark from "../../assets/Certificate/iq_symbol.png";
import BgImg from "../../assets/Certificate/bg.jpg";
import CertificateImg from "../../assets/homepage/certificate_img.png";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import moment from 'moment';

export default function IQCertificate(props) {

    const certificate = props?.certificate;

    const downloadPdf = (id, fileName) => {
        const input = document.getElementById(`certificate-${id}`);
        html2canvas(input, { useCORS: true, allowTaint: true, scrollY: 0 }).then(
            (canvas) => {
                const image = { type: "jpeg", quality: 100 };
                const margin = [0.1, 0.1];
                const filename = fileName || "IQ Certificate.pdf";


                var imgWidth = 8.5;
                var pageHeight = 14;

                var innerPageWidth = imgWidth - margin[0] * 2;
                var innerPageHeight = pageHeight - margin[1] * 2;

                // Calculate the number of pages.
                var pxFullHeight = canvas.height;
                var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
                var nPages = Math.ceil(pxFullHeight / pxPageHeight);

                // Define pageHeight separately so it can be trimmed on the final page.
                var pageHeight = innerPageHeight;

                // Create a one-page canvas to split up the full image.
                var pageCanvas = document.createElement("canvas");
                var pageCtx = pageCanvas.getContext("2d");
                pageCanvas.width = canvas.width;
                pageCanvas.height = pxPageHeight;

                // Initialize the PDF.
                var pdf = new jsPDF("p", "in", [8.5, 11]);

                for (var page = 0; page < nPages; page++) {
                    // Trim the final page to reduce file size.
                    if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
                        pageCanvas.height = pxFullHeight % pxPageHeight;
                        pageHeight =
                            (pageCanvas.height * innerPageWidth) / pageCanvas.width;
                    }

                    // Display the page.
                    var w = pageCanvas.width;
                    var h = pageCanvas.height;
                    pageCtx.fillStyle = "white";
                    pageCtx.fillRect(0, 0, w, h);
                    pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);

                    // Add the page to the PDF.
                    if (page > 0) pdf.addPage();
                    var imgData = pageCanvas.toDataURL(
                        "image/" + image.type,
                        image.quality
                    );
                    pdf.addImage(
                        imgData,
                        image.type,
                        margin[1],
                        margin[0],
                        innerPageWidth,
                        pageHeight
                    );
                }

                pdf.save(filename);
            }
        );
    };

    const viewPdf = (id) => {
        const input = document.getElementById(`certificate-${id}`);
        html2canvas(input, { useCORS: true, allowTaint: true, scrollY: 0 }).then(
            (canvas) => {
                const image = { type: "jpeg", quality: 100 };
                const margin = [0.1, 0.1];

                var imgWidth = 8.5;
                var pageHeight = 14;

                var innerPageWidth = imgWidth - margin[0] * 2;
                var innerPageHeight = pageHeight - margin[1] * 1;

                // Calculate the number of pages.
                var pxFullHeight = canvas.height;
                var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
                var nPages = Math.ceil(pxFullHeight / pxPageHeight);

                // Define pageHeight separately so it can be trimmed on the final page.
                var pageHeight = innerPageHeight;

                // Create a one-page canvas to split up the full image.
                var pageCanvas = document.createElement("canvas");
                var pageCtx = pageCanvas.getContext("2d");
                pageCanvas.width = canvas.width;
                pageCanvas.height = pxPageHeight;

                // Initialize the PDF.
                var pdf = new jsPDF("p", "in", [8.5, 11]);

                for (var page = 0; page < nPages; page++) {
                    // Trim the final page to reduce file size.
                    if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
                        pageCanvas.height = pxFullHeight % pxPageHeight;
                        pageHeight =
                            (pageCanvas.height * innerPageWidth) / pageCanvas.width;
                    }

                    // Display the page.
                    var w = pageCanvas.width;
                    var h = pageCanvas.height;
                    pageCtx.fillStyle = "white";
                    pageCtx.fillRect(0, 0, w, h);
                    pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);

                    // Add the page to the PDF.
                    if (page > 0) pdf.addPage();
                    var imgData = pageCanvas.toDataURL(
                        "image/" + image.type,
                        image.quality
                    );
                    pdf.addImage(
                        imgData,
                        image.type,
                        margin[0],
                        margin[0],
                        innerPageWidth,
                        pageHeight
                    );
                }
                window.open(pdf.output("bloburl"), "_blank");
            }
        );
    }

    return (
        <div className='certificate-wrapper'>
            {/* ------------ Old Certificate -------------- */}
            {/* <div>
                <div id={`certificate-${props?.index}`} class="certificate text-center px-5">
                    <img class="certificate_img mb-2" src={CertificateImg} alt="Certificate logo" />
                    <h1 className='text-center'>Certificate for intellectual Achievement</h1>
                    <p>This is to certify that</p>
                    <h2>Mr./Mrs./Miss.  {`${certificate?.user_id?.firstname} ${certificate?.user_id?.lastname}`}</h2>
                    <p>Has successfully completed intellectual examination
                        and has achieved the score:</p>
                    <h2>Intelligence Quotient: {certificate?.iqScore}</h2>
                    <p>In recognition, this certificate of
                        Intelligence is granted on {moment(certificate?.createdAt).format('LL')}</p>
                    <div class="footer">
                        <img class="signature_img" src={Signature} alt="Authorized Signature" />
                        <p>......................................</p>
                        <p class="signature text-muted">Signature of director</p>
                        <img class="logo" src={IqLogo} alt="Logo" />
                    </div>
                </div>
            </div> */}

            <div className='certificate-container mx-auto' id={`certificate-${props?.index}`} >
                <div className='bg-img'>
                    <img src={BgImg} alt="Logo" />
                </div>
                <div className='border-wrapper'>
                    <div className='logo-container text-center'>
                        <img className="logo" src={IqLogoTransparent} alt="Logo" />
                    </div>
                    <div className='header text-center mt-3'>
                        <h1 className='title-bg m-0'>Certificate</h1>
                        <h1 className='title-sm m-0'>of Achievement</h1>
                    </div>
                    <div className='top-border'>
                        <img src={BorderTop} alt="border-top" />
                    </div>
                    <div className='text-center'>
                        <p className='description'>General intelligence Quotient Certificate Awarded to</p>
                    </div>
                    <div className='text-center mt-4'>
                        <h1 className='title-sm m-0 text-dark'>{`${certificate?.user_id?.firstname} ${certificate?.user_id?.lastname}`}</h1>
                    </div>
                    <div className='bottom-border'>
                        <img src={BorderBottom} alt="border-bottom" />
                    </div>
                    <div className='text-center'>
                        <p className='description px-5'>In Recognition For Successful Completion Of The IQ Cosmos Certified Test With The Score of</p>
                    </div>
                    <div className='header text-center mt-4 mb-3'>
                        <h1 className='title-sm m-0'>{certificate?.iqLevel}</h1>
                    </div>
                    <div className='text-center'>
                        <p className='date'>{moment(certificate?.createdAt).format('LL')}</p>
                    </div>
                    <div className='iq-mark mt-4'>
                        <img src={IQMark} alt="iq-mark" />
                    </div>
                    <div className='certificate-footer'>
                        <div className='text-center'>
                            <p className='footer-text m-0'>IQ cosmos IQ test</p>
                            <p className='footer-text m-0'>Certificate no.</p>
                            <p className='footer-text m-0'>{certificate?.certificateId}</p>
                        </div>
                        <div className='text-center'>
                            <img class="signature_img" src={Signature} alt="Authorized Signature" />s
                            <p className='footer-text m-0'><b>_______________</b></p>
                            <p className='footer-text m-0'>Signature</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-felx my-3'>
                <button
                    className='px-3 btn btn-success'
                    onClick={() => downloadPdf(props?.index, 'IQ Cerificate')}
                >
                    Download
                </button>
                <button
                    className='px-3 ms-4 btn btn-primary'
                    onClick={() => viewPdf(props?.index)}
                >
                    View
                </button>
            </div>
        </div>
    )
}
