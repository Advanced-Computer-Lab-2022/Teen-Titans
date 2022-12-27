import React, { useEffect, useState } from "react"
import jsPDF from 'jspdf';
import compress from "compress-base64";
import axios from 'axios';
import FormData from 'form-data'
import ReportDetails from "../components/ReportDetails";
// import * as pdf from "@grapecity/wijmo.pdf";
// import * as wijmo from '@grapecity/wijmo';
const CourseSettings = () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    const userId = params.get('userId');
    const user = params.get('user')
    const [course, setCourse] = useState(null)
    const [problem, setProblem] = useState(null)
    const [reports,setReports]=useState([])

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
    },[])
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
        // console.log(pdfToSend);
        const img = "Template.png"
        const data = new FormData();
        data.append('file', pdfToSend);
        // let reader = new FileReader();
        // const compressed = compress(data)
        // for (let pair of data.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }
        // console.log(data.get("file"));
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
    let type;
    type = document.getElementById('reportType').value.toString()

    const response = await fetch(`http://localhost:5000/users/report?courseId=${courseId}&traineeId=${userId}&type=${type}&problem=${problem}&user=${user}`,
        {
            method: 'POST',
           headers: {
               'Content-Type': 'application/json'  
     }
},)
        console.log("user id",userId)    
        console.log("course id",courseId)
        console.log("type",type)
        console.log("problem",problem)
      const json = await response.json()
        console.log(json);
        console.log(userId);
        
         if (response.ok) {
         alert('Report sent successfully!')
   }
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

            <div>
                <h> Report A Problem :</h>
                <input
                    type="text"
                    className="from-control mt-4"
                    id='searchKey'
                    placeholder='please write your problem'
                 onChange={(e) => setProblem(e.target.value)}
                />
                {/* <form className="reports" >
                <div>
                <ul>
                    <li>
                        <input type="radio" id="a" name="financial" />
                        <label for="a">Financial</label>
                        <input type="radio" id="b" name="technical"  />
                        <label for="b">Technical</label>
                        <input type="radio" id="c" name="other"/>
                        <label for="c">Other</label>
              <br></br>
                    </li>
                    </ul>
                </div>
                </form> */}
             <label>Select your problem type:</label>
            <br></br>
            <select name="reportType" id="reportType">
                <option value="Financial">Financial</option>
                <option value="Technical">Technical</option>
                <option value="Other">Other</option>
            </select>
            
                <button type="submit" onClick={() => Report()}> Report </button>
            </div>
            <div className='view'>
            <div className='reports'>
                {reports && reports.map((report)=>(
                    
                    <ReportDetails key={report._id} report={report} />
                ))}
            </div>
        </div>

        </div>
        
    )
}


export default CourseSettings