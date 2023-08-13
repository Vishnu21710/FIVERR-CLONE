import React from 'react'
import { Table, TableContainer, TableCell, TableRow, TableHead, Paper, TableBody, styled, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import moment from 'moment'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import makeRequest from '../utils/makeRequest';
makeRequest

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    '&:last-child td, &:last-child th': {
        border: 0
    }
}))



const MessageTable = ({ isSeller, data }) => {

    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (id) => {
            return makeRequest.put(`/api/conversations/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['conversations'])
        }
    })

    const handleRead = (id) => {
        mutation.mutate(id)
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#2C3E50" }}>
                        <TableCell sx={{ color: 'white', fontWeight: '700', width: '20%' }}>Buyer</TableCell>
                        <TableCell sx={{ color: 'white', fontWeight: '700', width: '60%' }}>Last Message</TableCell>
                        <TableCell sx={{ color: 'white', fontWeight: '700' }}>Date</TableCell>
                        <TableCell sx={{ color: 'white', fontWeight: '700' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((row, index) => (
                            <StyledTableRow key={index} >
                                <TableCell>{isSeller ? row.buyer_id : row.seller_id}</TableCell>
                                <TableCell><Link to={`/message/${row.id}`}>{row.last_message?.substring(0, 100)}...</Link></TableCell>
                                <TableCell>{moment(row.updatedAt).fromNow()}</TableCell>
                                <TableCell>{((isSeller && !row.read_by_seller) || (!isSeller && !row.read_by_buyer)) && <Button variant='contained' color='success' onClick={()=>handleRead(row.id)}>Mark Read</Button>}</TableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MessageTable