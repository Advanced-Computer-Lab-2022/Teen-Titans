import { useState,useEffect } from "react";
import {useLocation} from 'react-router-dom'
import ReportDetails from '../components/ReportDetails'
const Reports=()=>{
   
   
    const location = useLocation();
    const reports= location.state;
    console.log("report page",reports);








    return(
       
           
           <div className='view'>
            <div className='reports'>
                {reports && reports.map((report)=>(
                    
                    <ReportDetails key={report._id} report={report} />
                ))}
            </div>
        </div>
    )
}

export default Reports