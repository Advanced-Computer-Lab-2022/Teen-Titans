import React, { useEffect, useState } from "react"
import jsPDF from 'jspdf';
import axios from 'axios';
const CourseSettings = () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    const userId = params.get('userId');
    const user = params.get('user')
    const [course, setCourse] = useState(null)
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
    }, [course])
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
        const pdfToSend = doc.output('dataurlstring', { filename: "Certificate.pdf" });
        await axios.post(`/users/getCertificateByEmail?id=${userId}&courseId=${courseId}&user=${user}`, { pdfToSend: pdfToSend }).then(
            (res) => {
                const json = res.data
                if (json) {
                    console.log(json);
                }
            }
        )
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
        </div>
    )
}


export default CourseSettings