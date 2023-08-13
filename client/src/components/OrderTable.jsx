import React from 'react'
import { Table, TableContainer, TableCell, TableRow, TableHead, Paper, TableBody, styled } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import { useQuery } from '@tanstack/react-query';
import makeRequest from '../utils/makeRequest';
import {useNavigate} from 'react-router-dom'

function createData(image, title, price, buyer, contact){
    return {image, title, price, buyer, contact}
}

const rows = [
    createData('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Maria Anders', '12', 'Jon Doe', <EmailIcon className='cursor-pointer text-blue-500' />),
    createData('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600', 'James Cameroon', '12', 'John Doe', <EmailIcon className='cursor-pointer text-blue-500' />),
    createData('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Tom Cruise', '12', 'John Doe', <EmailIcon className='cursor-pointer text-blue-500' />),
    createData('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600', 'George Kiwi', '12', 'John Doe', <EmailIcon className='cursor-pointer text-blue-500' />),
    createData('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Andrew Olive', '12', 'John Doe', <EmailIcon className='cursor-pointer text-blue-500' />)
]

const StyledTableRow = styled(TableRow)(({theme})=>({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    '&:last-child td, &:last-child th': {
        border:0
    }
}))

const OrderTable = ({isSeller, data }) => {
    const navigate = useNavigate()
    const handleContact = async(order)=>{
            console.log(order);
            const sellerId = order.seller_Id
            const buyerId = order.buyer_Id 

            const id = sellerId + buyerId 

            try {
                    const res = await makeRequest.get(`/api/conversations/single/${id}`)
                    navigate(`/message/${res.data.id}`)
            } catch (error) {
                if(error.response.status === 500){
                    const res = await makeRequest.post('/api/conversations', {to: isSeller ? buyerId : sellerId})
                    navigate(`/message/${res.data.id}`)

                }
            }
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow sx={{backgroundColor:"#2C3E50"}}>
                        <TableCell sx={{color:'white', fontWeight: '700'}}>Image</TableCell>
                        <TableCell sx={{color:'white', fontWeight: '700'}}>Title</TableCell>
                        <TableCell sx={{color:'white', fontWeight: '700'}}>Price</TableCell>
                        <TableCell sx={{color:'white', fontWeight: '700'}}>{isSeller ? 'Buyer' : 'Seller'}</TableCell>
                        <TableCell sx={{color:'white', fontWeight: '700'}}>Contact</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((row, index) => (
                            <StyledTableRow key={index}>
                                <TableCell><img src={row.image} className='w-[70px] h-[50px]' /></TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>{}</TableCell>
                                <TableCell onClick={()=>handleContact(row)}>{<EmailIcon sx={{color: 'lightblue'}}/>}</TableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrderTable