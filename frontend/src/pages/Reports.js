import { useState, useEffect } from "react";
// import {useLocation} from 'react-router-dom'
// import ReportDetails from '../components/ReportDetails'
import Sidebar from '../components/SideBar/AdminSideBar';

// import axios from 'axios';
// import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
// import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from "@mui/material";
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const Reports = () => {




    const [reports, setReports] = useState(null)
    // const [course,setCourse]= useState(null)
    // const [user,setUser]= useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {

        const fetchReports = async () => {
            const response = await fetch(`http://localhost:5000/admin/getReports`)
            const json = await response.json()

            if (response.ok) {
                setReports(json)
                console.log("reports", json)
            }
        }


        fetchReports()

    }, [])

    const mark = async (status, id) => {
        const res = await fetch(`http://localhost:5000/admin/updateReport`, {
            method: 'POST',
            body: JSON.stringify({
                "id": id,
                "status": status

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const js = await res.json()
        if (!res.ok)
            setError(js.error)
    }










    return (


        //    <div className='view'>

        //  <Sidebar  />

        //     <div className='reports'>
        //         {reports && reports.map((report)=>(

        //             <ReportDetails key={report._id} report={report} />
        //         ))}
        //     </div>
        // </div>



        ///table

        /* 
          1. create a button to load the blogs
          2. map over the blogs and display them
          */

        <div className="container1">
            {/* <Box sx={{marginBottom: 2}}>
        <Button variant="contained"
        onClick={getBlogs}
        margin="normal"
        padding="normal"
        >Load Reports</Button>
        
        
        </Box> */}


            <Sidebar />

            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell  style={{ background:"teal"}} align="center">Seen</StyledTableCell>
                            <StyledTableCell style={{ background:"teal"}}  align="center">User</StyledTableCell>
                            <StyledTableCell style={{ background:"teal"}} align="center">Report by</StyledTableCell>
                            <StyledTableCell style={{ background:"teal"}} align="center">Problem</StyledTableCell>
                            <StyledTableCell style={{ background:"teal"}} align="center">Course Title</StyledTableCell>
                            <StyledTableCell style={{ background:"teal"}} align="center">Status</StyledTableCell>
                            <StyledTableCell style={{ background:"teal"}} align="center">Type</StyledTableCell>
                            <StyledTableCell style={{ background:"teal"}} align="center">Actions</StyledTableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reports && reports.map((report) => (
                            <TableRow >
                                <TableCell align="center">{report.new ? <Checkbox defaultChecked /> : <Checkbox />}
                                </TableCell>

                                <TableCell align="center">{report.user}</TableCell>
                                <TableCell align="center">{report.username}</TableCell>
                                <TableCell align="center">{report.problem}</TableCell>
                                <TableCell align="center">{report.courseTitle}</TableCell>
                                <TableCell align="center">{report.status}</TableCell>
                                <TableCell align="center">{report.type}</TableCell>
                                <TableCell align="center">

                                    <FormControl >

                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue={report.status}
                                            name="radio-buttons-group"
                                            onChange={(e) => mark(e.target.value, report._id)}
                                        >
                                            <FormControlLabel value="pending" control={<Radio />} label="Pending" />
                                            <FormControlLabel value="resolved" control={<Radio />} label="Resolved" />
                                        </RadioGroup>
                                    </FormControl>
                                </TableCell>



                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Reports




