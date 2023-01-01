import { useState, useEffect } from "react";
import Sidebar from '../components/SideBar/AdminSideBar';
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



const country = JSON.parse(localStorage.getItem('country'))
const conversion_rate = country.conversion_rate
const target_code = country.target_code

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const Refunds = () => {


    const [refunds, setRefunds] = useState(null)
    const [error,setError]= useState(null)
    // const [show,setShow]= useState(true)
    const [disable,setDisable]= useState(false)

    useEffect(() => {

        const fetchRefunds = async () => {
            const response = await fetch(`http://localhost:5000/admin/getRefunds`)
            const json = await response.json()

            if (response.ok) {
                setRefunds(json)
                console.log("refunds", json)
            }
        }


        fetchRefunds()
    }, [])
//not working yet
    const Refund = async (id,userId,amount,courseId) => {
        //update wallet with % from course price
        const res = await fetch('/individual/refund', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": id,
                "userId": userId,
                "amount": amount,
                "courseId": courseId,
            })
        })
        const js = await res.json()
        if (!res.ok) {
          setError(js.error)
        }
        if (res.ok) {
          alert('wallet updated successfully!')
          setError(null)
        setDisable(true)
        }
        // setShow(false)
    }    







    return (


        //    <div className='view'>
        //      <Sidebar  />
        //     <div className='refunds'>
        //         {refunds && refunds.map((refund)=>(

        //             <RefundDetails key={refund._id} request={refund} />
        //         ))}
        //     </div>
        // </div>


        <div className="container1">



            <Sidebar />

            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">

                    <TableHead>
                   
                    
                        <TableRow>

                            <StyledTableCell align="center">Individual Trainee User name</StyledTableCell>
                            <StyledTableCell align="center">Course Title</StyledTableCell>
                            <StyledTableCell align="center">Course Price</StyledTableCell>
                            <StyledTableCell align="center">Refund Amount</StyledTableCell>

                            <StyledTableCell align="center">Actions</StyledTableCell>



                        </TableRow>
                     
                        
                        
                    </TableHead>
                    {/* {show? */}
                    <TableBody>
                    
                   
                        {refunds && refunds.map((refund) => (
                            <TableRow >
 

                                <TableCell align="center">{refund.username}</TableCell>
                                <TableCell align="center">{refund.courseTitle}</TableCell>
                                <TableCell align="center">{Math.round(refund.coursePrice* conversion_rate)} {target_code}</TableCell>
                                <TableCell align="center"> {Math.round(refund.coursePrice *conversion_rate* 0.5)} {target_code}</TableCell>
                                <TableCell align="center">
                                    <Box sx={{ marginBottom: 2 }}>
                                        <Button variant="contained"
                                             onClick={()=>{Refund(refund._id,refund.userId,refund.coursePrice*conversion_rate*0.5,refund.courseId)}}
                                            margin="normal"
                                            padding="normal"
                                            disabled={disable}
                                        >Refund 50 %</Button>


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

export default Refunds