import React from 'react';
import IqLogo from "../../assets/iqcosmos.png";
import Signature from "../../assets/homepage/signature.png";
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
                const image = { type: "jpeg", quality: 0.98 };
                const margin = [0.5, 0.5];
                const filename = fileName || "IQ Certificate.pdf";

                var imgWidth = 8.5;
                var pageHeight = 11;

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
                const image = { type: "jpeg", quality: 0.98 };
                const margin = [0.5, 0.5];

                var imgWidth = 8.5;
                var pageHeight = 11;

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
        <div>
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
            <div className='d-felx'>
                <button
                    className='px-3 btn btn-success'
                    onClick={() => downloadPdf(props?.index, 'IQ Cerificate')}
                >
                    Download
                </button>
                {/* <button
                    className='px-3 ms-4 btn btn-primary'
                    onClick={() => viewPdf(props?.index)}
                >
                    View
                </button> */}
            </div>
        </div>
    )
}
