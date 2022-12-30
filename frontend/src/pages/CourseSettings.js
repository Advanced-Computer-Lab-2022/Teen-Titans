import React, { useEffect, useState } from "react"
import jsPDF from 'jspdf';
import { Document, Page } from 'react-pdf';
import jsPDF, { TilingPattern } from 'jspdf';
import compress from "compress-base64";
import axios from 'axios';
import FormData from 'form-data'
import { PDFToImage } from 'react-pdf-to-image-light'
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const pdfjs = require('pdfjs-dist');
// const pdf = require('../assets/Template.pdf')
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';

import "bootstrap/js/src/collapse.js";


// import * as pdf from "@grapecity/wijmo.pdf";
// import * as wijmo from '@grapecity/wijmo';
const CourseSettings = ( username ) => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    const userId = params.get('userId');
    const user = params.get('user')
    const [course, setCourse] = useState(null)
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [problem, setProblem] = useState(null)
    const [type, setType] = useState(null)
    const [reports, setReports] = useState(null)
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


        const getReport=async()=>{
            await axios.get(`users/getReport?userId=${userId}`).then(
                (res) => {
                    const json = res.data
                    if (json) {
                        setReports(json)
                    }
                }
            )
        }

        getDetails()
        getReport()
    }, [])

   

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


    const Report = async () => {
       
    
        const res= await fetch(`http://localhost:5000/users/report?courseId=${courseId}&traineeId=${userId}&type=${type}&problem=${problem}&user=${user}`,
            {
                body: JSON.stringify({course }),
                method: 'POST',
               headers: {
                   'Content-Type': 'application/json'  
         }
    },)

  const json = await res.json()
    console.log(json);
    
    
     if (res.ok) {
     alert('Report sent successfully!')
     }
    
    
}
//not completed
const FollowUp = async (id) => {
    const res= await fetch(`http://localhost:5000/users/report?courseId=${courseId}&traineeId=${userId}&type=${type}&problem=${problem}&user=${user}`,
    {
        body: JSON.stringify({course }),
        method: 'POST',
       headers: {
           'Content-Type': 'application/json'  
 }
},)
alert('Follow up sent successfully!')
}
    
    return (
        <div>
            {
                user === 'individualTrainee' && course && course.percentageComplete < 50 &&
                <button className='danger' onClick={() => requestRefund()}>Drop Course</button>
            }
            {
                course &&
                course.percentageComplete === 100 &&
                <div>
                    <button className='btn2' onClick={() => generateCertificate()}>Download Certificate</button>
                    <br></br>
                    <button className='btn' onClick={() => sendCertificate()}>Get certificate by mail</button>
                </div>
                
            }

<div className='box'>
                <h2> Report a problem :</h2>
                <input
          style={{ width: "300px"}}
                    type="text"
                    className="from-control mt-4"
                    id='searchKey'
                    placeholder='Please type your problem..'
                 onChange={(e) => setProblem(e.target.value)}
                />
           
           <FormControl>

<RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
   onChange={(e) => setType(e.target.value)}
    name="radio-buttons-group"
>
    <FormControlLabel value="technical" control={<Radio />} label="Technical" />
    <FormControlLabel value="financial" control={<Radio />} label="Financial" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />

</RadioGroup>
</FormControl>
              <br></br>
                <button onClick={() => Report()}> Report </button>
            </div>


            
            <div className='col-8 course-details1'>
            <div className='d-flex flex-column'>
                                    <p>
                                        <a className="btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            My Reports
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample">
                                        
                                        {reports && reports.map((report)=>(
                                             <div className="card card-body">
                              

                                             <h4>Problem: {report.problem}</h4>
                                             <h6>Type:{report.type}</h6>
                                             <h6>Status:{report.status}</h6>
                                             <button style={{top:"50%",
       left:"65%",
       width:"100px",
       height:"40px",
       position: "absolute",
      
       background: "teal"}}  disabled={report.status==="resolved"} onClick={()=>FollowUp(report._id)}>Follow up</button>
                                         </div>
                                            
                    
                ))}
                                      
                                    </div>
                                </div>
                                </div>



        </div>



    )
}


export default CourseSettings