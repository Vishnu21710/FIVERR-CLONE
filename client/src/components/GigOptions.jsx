import React, { useState } from 'react'
import { Tab, Tabs, createTheme, ThemeProvider, colors, Tooltip, IconButton, Button } from '@mui/material'
import PropTypes from 'prop-types'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LoopIcon from '@mui/icons-material/Loop';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';


const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props
    return (
        <div hidden={value !== index} id={`simple-tabpanel-${index}`} className='flex justify-center'>
            {
                value === index && (
                    <div>
                        {children}
                    </div>
                )
            }
        </div>
    )
}

CustomTabPanel.propType = {
    children: PropTypes.node,
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
}



const GigOptions = ({ gig_short_title, gig_price, gig_features, gig_short_description, gig_revisions, gig_delivery_time, isLoading, error, gig_id }) => {


    const theme = createTheme({
        components: {
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        backgroundColor: 'green',
                    },
                },
            },
        },
    });
    const [value, setValue] = useState(0)
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <ThemeProvider theme={theme} >
                <Tabs onChange={handleChange} value={value} indicatorColor='primary' variant='fullWidth' textColor='inherit' sx={{ borderBottom: '1px solid #D5D8DC', }}>
                    <Tab label='Basic' sx={{ color: value === 0 ? 'green' : '#707B7C', backgroundColor: value === 0 ? 'white' : '#F8F9F9', borderRight: '1px solid #D5D8DC', fontWeight: '700', textTransform: 'capitalize', fontSize: '16px' }} />
                    <Tab label='Standard' sx={{ color: value === 1 ? 'green' : '#707B7C', backgroundColor: value === 1 ? 'white' : '#F8F9F9', borderRight: '1px solid #D5D8DC', fontWeight: '700', textTransform: 'capitalize', fontSize: '16px' }} />
                    <Tab label='Premium' sx={{ color: value === 2 ? 'green' : '#707B7C', backgroundColor: value === 2 ? 'white' : '#F8F9F9', fontWeight: '700', textTransform: 'capitalize', fontSize: '16px' }} />
                </Tabs>
            </ThemeProvider>
            <CustomTabPanel value={value} index={0}>
                {
                    isLoading ? "Please Wait" : error ? "Something Went Wrong" : (
                        <div className='flex flex-col p-5 gap-7'>
                        <div className='flex gap-10 w-full justify-between'>
                            <h1 className='text-xl font-semibold text-gray-800'>{gig_short_title}</h1>
                            <p className='text-xl font-medium text-gray-800 flex items-center'>Rs {gig_price} <span className='ml-2'><Tooltip sx={{ border: '1px solid #D5D8DC', width: '20px', height: '20px' }} title='To keep things simple, Fiverr may round up prices that contain decimals. The number you see here is the price used at checkout'><IconButton><PriorityHighIcon sx={{ fontSize: 'medium' }} /></IconButton></Tooltip></span></p>
                        </div>
                        <p className='text-lg text-gray-600'>{gig_short_description}</p>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-7'>
                                <span className='font-semibold text-gray-800 flex items-center gap-2'><AccessTimeIcon /> {gig_delivery_time} Day Delivery</span>
                                <span className='font-semibold text-gray-800 flex items-center gap-2 '><LoopIcon /> {gig_revisions} Revisions</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                {
                                    gig_features.map((feat, index) => (
                                        <span key={index} className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>{feat}</p></span>
                                    ))
                                }
                            </div>
                        </div>
                        <Link to={`/pay/${gig_id}`}><Button sx={{ width: '100%' }} variant='contained' style={{ backgroundColor: 'black', color: 'white' }}>Continue</Button></Link>
                    </div>
                        )
                }
                
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div className='flex flex-col p-5 gap-7 '>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-semibold text-gray-800'>Basic Package + Editing + Upscaling</h1>
                        <p className='text-xl font-medium text-gray-800 flex items-center'>Rs. 2,585 <span className='ml-2'><Tooltip sx={{ border: '1px solid #D5D8DC', width: '20px', height: '20px' }} title='To keep things simple, Fiverr may round up prices that contain decimals. The number you see here is the price used at checkout'><IconButton><PriorityHighIcon sx={{ fontSize: 'medium' }} /></IconButton></Tooltip></span></p>
                    </div>
                    <p className='text-lg text-gray-600'>One custom digital art design with Midjourney + Editing with Photoshop or other tools + Upscaling</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-7'>
                            <span className='font-semibold text-gray-800 flex items-center gap-2'><AccessTimeIcon /> 1 Day Delivery</span>
                            <span className='font-semibold text-gray-800 flex items-center gap-2 '><LoopIcon /> 5 Revisions</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>1 Image</p></span>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>Prompt Creation </p></span>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>Prompt Delivery</p></span>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>Artwork Delivery</p></span>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>Image Upscaling</p></span>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>Image Editing</p></span>
                        </div>
                    </div>
                    <Button sx={{ width: '100%' }} variant='contained' style={{ backgroundColor: 'black', color: 'white' }}>Continue</Button>

                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <div className='flex flex-col p-5 gap-7'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-semibold text-gray-800'>Standard Pack + Unlimited Revisions</h1>
                        <p className='text-xl font-medium text-gray-800 flex items-center'>Rs. 3,877 <span className='ml-2'><Tooltip sx={{ border: '1px solid #D5D8DC', width: '20px', height: '20px' }} title='To keep things simple, Fiverr may round up prices that contain decimals. The number you see here is the price used at checkout'><IconButton><PriorityHighIcon sx={{ fontSize: 'medium' }} /></IconButton></Tooltip></span></p>
                    </div>
                    <p className='text-lg text-gray-600'>One custom digital art design with Midjourney + Editing with Photoshop or other tools + Upscaling</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-7'>
                            <span className='font-semibold text-gray-800 flex items-center gap-2'><AccessTimeIcon /> 1 Day Delivery</span>
                            <span className='font-semibold text-gray-800 flex items-center gap-2 '><LoopIcon /> 5 Revisions</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>1 Image</p></span>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>Prompt Creation </p></span>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>Prompt Delivery</p></span>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>Artwork Delivery</p></span>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>Image Upscaling</p></span>
                            <span className='flex gap-2'><DoneIcon sx={{ color: 'green' }} /> <p>Image Editing</p></span>
                        </div>
                    </div>
                    <Button sx={{ width: '100%' }} variant='contained' style={{ backgroundColor: 'black', color: 'white' }}>Continue</Button>
                </div>
            </CustomTabPanel>
        </div>
    )
}

export default GigOptions