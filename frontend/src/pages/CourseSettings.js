import React, { useEffect, useState } from "react"
import jsPDF from 'jspdf';
import { Document, Page } from 'react-pdf';
import compress from "compress-base64";
import axios from 'axios';
import FormData from 'form-data'
import { PDFToImage } from 'react-pdf-to-image-light'
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const pdfjs = require('pdfjs-dist');
// const pdf = require('../assets/Template.pdf')
// import * as pdf from "@grapecity/wijmo.pdf";
// import * as wijmo from '@grapecity/wijmo';
const CourseSettings = () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    const userId = params.get('userId');
    const user = params.get('user')
    const [course, setCourse] = useState(null)
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        const getDetails = async () => {
            await axios.get(`myCourse/${user}/openCourse?id=${userId}&courseId=${courseId}`).then(
                (res) => {
                    const json = res.data
                    if (json) {
                        setCourse(json)
                    }
                }
            )
        }
        getDetails()
    })

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const requestRefund = async () => {
        await axios.get(`/individual/requestRefund?id=${userId}&courseId=${courseId}`).then(
            (res) => {
                const json = res.data
                if (json) {
                    // console.log(json);
                    alert(json.message)
                }
            }
        )
    }
    const generateCertificate = async () => {
        const doc = new jsPDF({
            orientation: 'landscape'
        })
        let date = new Date();
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        date = mm + '/' + dd + '/' + yyyy;
        let name;
        let course;
        let instructor;
        await axios.get(`/users/getCertificate?id=${userId}&courseId=${courseId}&user=${user}`).then(
            (res) => {
                const json = res.data
                if (json) {
                    console.log(json);
                    name = json.name;
                    course = json.course;
                    instructor = json.instructor;
                }
            }
        )
        doc.addImage("Template.png", 0, 0, 297, 210);
        // doc.setFillColor('#e7d49e', 231, 212, 158)
        doc.setFontSize(40);
        doc.setTextColor(0, 0, 0);
        doc.setFont('Lato-Black', 'bold');
        doc.text(name, (doc.internal.pageSize.width / 2), 110, null, null, 'center');
        doc.setFont('Lato-Regular', 'normal');
        doc.setFontSize(15);
        doc.text(course, (doc.internal.pageSize.width / 2), 120, null, null, 'center');
        doc.text(date, (doc.internal.pageSize.width / 2), 130, null, null, 'center');
        doc.setFont('Lato-Black', 'bold');
        doc.setFontSize(17.2);
        doc.text(instructor, 95, 172, null, null, 'center');
        doc.save("Certificate.pdf");
    }

    const readFileData = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                resolve(e.target.result);
            };
            reader.onerror = (err) => {
                reject(err);
            };
            reader.readAsDataURL(file);
        });
    };

    const convertPdfToImages = async (file) => {
        let images = [];
        const data = await readFileData(file);
        const pdf = await pdfjs.getDocument(data).promise;
        const canvas = document.createElement("canvas");
        for (let i = 0; i < pdf.numPages; i++) {
            const page = await pdf.getPage(i + 1);
            const viewport = page.getViewport({ scale: 1 });
            const context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            await page.render({ canvasContext: context, viewport: viewport }).promise;
            images = canvas.toDataURL()
            images.append(canvas.toDataURL());
        }
        canvas.remove();
        // console.log(image);
        return images;
    }

    const sendCertificate = async () => {
        const doc = new jsPDF({
            orientation: 'landscape'
        })
        let date = new Date();
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        date = mm + '/' + dd + '/' + yyyy;
        let name;
        let course;
        let instructor;
        await axios.get(`/users/getCertificate?id=${userId}&courseId=${courseId}&user=${user}`).then(
            (res) => {
                const json = res.data
                if (json) {
                    console.log(json);
                    name = json.name;
                    course = json.course;
                    instructor = json.instructor;
                }
            }
        )
        doc.addImage("Template.png", "PNG", 0, 0, 297, 210);
        doc.setFontSize(40);
        doc.setTextColor(0, 0, 0);
        doc.setFont('Lato-Black', 'bold');
        doc.text(name, (doc.internal.pageSize.width / 2), 110, null, null, 'center');
        doc.setFont('Lato-Regular', 'normal');
        doc.setFontSize(15);
        doc.text(course, (doc.internal.pageSize.width / 2), 120, null, null, 'center');
        doc.text(date, (doc.internal.pageSize.width / 2), 130, null, null, 'center');
        doc.setFont('Lato-Black', 'bold');
        doc.setFontSize(17.2);
        doc.text(instructor, 95, 172, null, null, 'center');
        const pdfToSend = doc.output('blob', { filename: "Certificate.pdf" });
        const data = new FormData();
        data.append('file', pdfToSend);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        };
        if (data) {
            await axios.post(`/users/getCertificateByEmail?id=${userId}&courseId=${courseId}&user=${user}`, data, config).then(
                (res) => {
                    const json = res.data
                    if (json) {
                        console.log(json);
                    }
                }
            )
                .catch((error) => {
                    console.log(error);
                })
        }
    }
    return (
        <div className="home">
            {
                user === 'individualTrainee' && course && course.percentageComplete < 50 &&
                <button className='danger' onClick={() => requestRefund()}>Drop Course</button>
            }
            {
                course &&
                course.percentageComplete === 100 &&
                <div>
                    <h2>Congratulations! You have completed the {course.course.title} course. Now get your certificate!</h2>
                    <button className='home-button' onClick={() => generateCertificate()}>Download Certificate</button>
                    <br></br>
                    <button className='home-button' onClick={() => sendCertificate()}>Get certificate by mail</button>
                </div>
            }
        </div>
    )
}


export default CourseSettings