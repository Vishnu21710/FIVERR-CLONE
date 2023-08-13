import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, TableContainer, TableCell, TableHead, TableRow, TableBody, Paper , styled} from '@mui/material'
import { Link } from 'react-router-dom';


function createData(image, title, price, order, action)  {
    return {image, title, price, order, action}
  }

  const rows = [
    createData('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Maria Anders', '12', '113', <DeleteIcon className='cursor-pointer text-red-500'/>),
    createData('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600', 'James Cameroon', '12', '113', <DeleteIcon className='cursor-pointer text-red-500'/>),
    createData('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Tom Cruise', '12', '113', <DeleteIcon className='cursor-pointer text-red-500'/>),
    createData('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600', 'George Kiwi', '12', '113', <DeleteIcon className='cursor-pointer text-red-500'/>),
    createData('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Andrew Olive', '12', '113', <DeleteIcon className='cursor-pointer text-red-500'/>)
  ]

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  

const TableComponent = ({data, handleDelete}) => {
  console.log(data);

  return (
    <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{backgroundColor:"#2C3E50"}}>
                            <TableCell sx={{color: 'white', fontWeight: '700'}}>Image</TableCell>
                            <TableCell sx={{color: 'white', fontWeight: '700'}}>Title</TableCell>
                            <TableCell sx={{color: 'white', fontWeight: '700'}}>Price</TableCell>
                            <TableCell sx={{color: 'white', fontWeight: '700'}}>Order</TableCell>
                            <TableCell sx={{color: 'white', fontWeight: '700'}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((row, index)=>(
                                <StyledTableRow key={index}>
                                    <TableCell><img className='w-[70px] h-[50px]' src={row.gig_images[0]} alt="" /></TableCell>
                                    <TableCell><Link to={`/gig/${row._id}`}>{row.gig_title}</Link></TableCell>
                                    <TableCell>{row.gig_price}</TableCell>
                                    <TableCell>{row.gig_sales}</TableCell>
                                    <TableCell><DeleteIcon onClick={()=>handleDelete(row._id)}/></TableCell>
                                </StyledTableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
    </div>
  )
}

export default TableComponent