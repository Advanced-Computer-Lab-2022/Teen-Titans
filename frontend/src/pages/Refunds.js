import { useState,useEffect } from "react";
import {useLocation} from 'react-router-dom'
import RefundDetails from "../components/RefundDetails.js";
const Refunds=()=>{
   
   
    const location = useLocation();
    const requests= location.state;
    console.log("refund page",requests);








    return(
       
           
           <div className='view'>
            <div className='requests'>
                {requests && requests.map((request)=>(
                    
                    <RefundDetails key={request._id} request={request} />
                ))}
            </div>
        </div>
    )
}

export default Refunds