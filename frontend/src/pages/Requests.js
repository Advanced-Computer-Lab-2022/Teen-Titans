import { useState,useEffect } from "react";
import {useLocation} from 'react-router-dom'
import RequestDetails from "../components/RequestDetails";
const Requests=()=>{
   
   
    const location = useLocation();
    const requests= location.state;
    console.log("requests IN REQUESTS PAGE",requests);








    return(
       
           
           <div className='view'>
            <div className='requests'>
                {requests && requests.map((request)=>(
                    
                    <RequestDetails key={request._id} request={request} />
                ))}
            </div>
        </div>
    )
}

export default Requests