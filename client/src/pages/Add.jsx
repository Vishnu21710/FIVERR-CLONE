import { Menu, MenuItem, Select, TextField, InputLabel, FormControl, Input, Button } from '@mui/material'
import React, { useReducer, useState } from 'react'
import { INITIAL_STATE, gigReducer } from '../reducers/gigReducer'
import upload from '../utils/upload'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import makeRequest from '../utils/makeRequest'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const [singleFile, setSingleFile] = useState('')
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)

  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (gig)=>{
      return makeRequest.post('/api/gigs/create', gig)
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries('myGigs')
    }
  })



  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE)
  console.log({features: state.gig_features});

  const handleChange = (e) => {
    dispatch({ type: "CHANGE_INPUT", payload: { name: e.target.name, value: e.target.value } })
  }

  const handleFeatures = (e) => {
    e.preventDefault()
    console.log(e.target[0].value);
    dispatch({ type: "ADD_FEATURES", payload: e.target[0].value })
    e.target[0].value = ""
  }

  const handleUpload = async () => {
    setUploading(true)
    try {
      const gig_cover_image = await upload(singleFile)
      const gig_images = await Promise.all(
        [...files].map(async file => {
          const url = await upload(file)
          return url
        })
      )
      setUploading(false)
      dispatch({ type: "ADD_IMAGES", payload: { gig_cover_image: gig_cover_image, gig_images: gig_images } })
    } catch (error) {

    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    mutation.mutate(state)
    navigate('/my-gigs')
  }

  console.log(state);

  return (
    <div className='flex justify-center mt-[150px]'>
      <div className='flex flex-col  w-5/6 '>
        <h1 className='text-4xl font-semibold'>Add New Gig</h1>
        <div className=' form flex gap-10 my-5'>
          <div className='left w-1/2 flex flex-col gap-5'>
            <TextField name='gig_title' onChange={handleChange} variant='outlined' placeholder='I will do something I am really good at...' label="Gig Title" required fullWidth sx={{ backgroundColor: '#FDFEFE' }} />
            <div>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelid="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                defaultValue={'design'}
                fullWidth
                name='gig_category'
                onChange={handleChange}
              >
                <MenuItem value={'design'}>Design</MenuItem>
                <MenuItem value={'webDevelopment'}>Web Development</MenuItem>
                <MenuItem value={'animation'}>Animation</MenuItem>
                <MenuItem value={'music'}>Music</MenuItem>
              </Select>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <InputLabel id="file">Cover Image</InputLabel>
                <Input type='file' labelid='file' onChange={e => setSingleFile(e.target.files[0])}></Input>
                <InputLabel id="file-multiple">Gig Images</InputLabel>
                <Input type='file' inputProps={{ multiple: true }} onChange={e => setFiles(e.target.files)} labelid='file-multiple'></Input>
                <InputLabel htmlFor="desc">Description</InputLabel>
              </div>
              <Button color='success' variant='contained' onClick={handleUpload}>{uploading ? 'Uploading....' : 'Upload'}</Button>
            </div>

            <textarea name="gig_description" onChange={handleChange} placeholder='Gig description' id='desc' className='border-[1px] border-gray-400 p-3' cols={30} rows={16}  ></textarea>
            <Button variant='contained' color='success' sx={{ padding: '10px' }} onClick={handleSubmit}>Create</Button>
          </div>
          <div className='right w-1/2 flex flex-col gap-5'>
            <TextField name='gig_short_title' onChange={handleChange} label="Service Title" placeholder='eg. One Page Web Design' fullWidth></TextField>
            <InputLabel htmlFor="s-desc" >Short Description</InputLabel>
            <textarea placeholder='Short description of your service...' id='s-desc' className='border-[1px] border-gray-400 p-3 ' cols={30} rows={6} name='gig_short_description' onChange={handleChange} ></textarea>
            <TextField onChange={handleChange} name='gig_delivery_time' type='number' inputProps={{ min: 1 }} label='Delivery Time' placeholder='eg. 3 days...'></TextField>
            <TextField type='number' onChange={handleChange} name='gig_revisions' inputProps={{ min: 1 }} label='Revision Number' ></TextField>
            <InputLabel id='add-features'>Add Features</InputLabel>
            <form action="" className='flex gap-5' onSubmit={(e) => handleFeatures(e)}>
              <TextField placeholder='eg. Page Design' sx={{ width: "100%" }}></TextField>
              <Button variant='contained' color='success'  type='submit' >ADD</Button>
            </form>
            <div className='flex gap-3 flex-wrap'>
              {
                 state?.gig_features.map((f, index)=>(
                  <Button variant='outlined' color='error' key={index}>
                  <p>{f} </p>
                  <span onClick={()=>{dispatch({type: 'REMOVE', payload:f})}} className='ml-3'>X</span>
                </Button>
                ))
              }
              
            </div>
            {/* <TextField placeholder='eg. File Uploading' ></TextField>
              <TextField placeholder='eg. Setting Up a Domain' ></TextField>
              <TextField placeholder='eg. Hosting' ></TextField> */}
            <TextField onChange={handleChange} name='gig_price' label='Price' type='number' inputProps={{ min: 1 }} placeholder='eg. 100$' ></TextField>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Add