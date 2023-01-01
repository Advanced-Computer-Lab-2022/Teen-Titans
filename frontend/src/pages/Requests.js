import { useState,useEffect } from "react";
// import {useLocation} from 'react-router-dom'
import Sidebar from '../components/SideBar/AdminSideBar';

// import RequestDetails from "../components/RequestDetails";


// import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


const Requests=()=>{
   
   const [requests, setRequests] = useState([])
    const [error,setError]= useState(null)
    // const [show,setShow]= useState(true)
    const [disable,setDisable]= useState(false)

    // const location = useLocation();
    // const requests= location.state;
    // console.log("requests IN REQUESTS PAGE",requests);



    useEffect(()=>{
        const fetchRequests= async()=>{
            const response = await fetch(`http://localhost:5000/admin/getRequests`)
            const json= await response.json()

            if(response.ok){
                setRequests(json)
                console.log("requests ",json)
                setDisable(false)
            }
        }

    
    fetchRequests() },[])

    const Accept= async(id,courseId,userId)=>{
  

        const response = await fetch(`http://localhost:5000/corporateTrainee/registerForCourse`, {
            method: 'POST',
            body: JSON.stringify({
              "id": id,
              "courseId":courseId,
              "userId":userId
             
              
              }
            ),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const json = await response.json()
          if (!response.ok) {
            setError(json.error)
          }
          if (response.ok) {
            alert('Course added successfully!')
            setError(null)
           // console.log('new course added to corporate trainee', json)
          }
        //   setShow(false)
    
    
          const res = await fetch(`http://localhost:5000/admin/changeStatus`, {
            method: 'POST',
            body: JSON.stringify({
              "id": id,
    
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      })
      const js = await res.json()
      if (!res.ok) 
        setError(js.error)
        // setDisable(true)

        const newRequests= requests.filter((request)=>request._id!==id)
        setRequests(newRequests)
    }

     const Reject= async(id)=>{
        const res = await fetch(`http://localhost:5000/admin/changeStatus`, {
            method: 'POST',
            body: JSON.stringify({
               "id": id,
    
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      })
      const js = await res.json()
      if (!res.ok) 
        setError(js.error)
      const newRequests= requests.filter((request)=>request._id!==id)
        setRequests(newRequests)
        // setDisable(true)
    }
    

    return(
       
           
        //    <div className='view'>
        //      <Sidebar  />
        //     <div className='requests'>
        //         {requests && requests.map((request)=>(
                    
        //             <RequestDetails key={request._id} request={request} />
        //         ))}
        //     </div>
        // </div>
        <div className="container1">



            <Sidebar />

            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">

                    <TableHead>
                   
                    
                        <TableRow>

                            <StyledTableCell align="center">Corporate Trainee User name</StyledTableCell>
                            <StyledTableCell align="center">Course Title To Access</StyledTableCell>
                           

                            <StyledTableCell align="center">Actions</StyledTableCell>



                        </TableRow>
                     
                        
                        
                    </TableHead>
                    {/* {show? */}
                    <TableBody>
                    
                   
                        {requests && requests.map((request) => (
                            <TableRow >
 

                                <TableCell align="center">{request.username}</TableCell>
                                <TableCell align="center">{request.courseTitle}</TableCell>
                               
                                
                                <TableCell align="center">
                                    <Box sx={{ marginBottom: 2 }}>
                                        <Button variant="contained"
                                             onClick={()=>Accept(request._id,request.courseId,request.userId)}
                                            margin="normal"
                                            padding="normal"
                                            disabled={disable}
                                        >Accept</Button>


                                    </Box>

                                    <Box sx={{ marginBottom: 2 }}>
                                        <Button variant="contained"
                                             onClick={()=>Reject(request._id)}
                                            margin="normal"
                                            padding="normal"
                                            disabled={disable}
                                        >Reject</Button>


                                    </Box>
                                </TableCell>
                                



                            </TableRow>
                        ))}
                     
                    </TableBody>
                    {/* : null} */}
                </Table>
            </TableContainer>

        </div>
    )
                }

export default Requests