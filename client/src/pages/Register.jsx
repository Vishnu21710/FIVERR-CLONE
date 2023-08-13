import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, TextField, InputLabel, Input } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import upload from '../utils/upload.js';
import makeRequest from '../utils/makeRequest.js';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    country: '',
    image: '',
    isSeller: false,
    description :''
  })

  const [file, setFile] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSeller = (e) => {
    setForm(prev=>(
      {...prev, isSeller: e.target.checked}
    ))
  }

  console.log(form);

  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const url = await upload(file)
    try {
      const response = await makeRequest.post('/api/auth/register', {
        ...form, image: url
      })
      navigate('/login')
    } catch (error) {
      console.log();
    }
  }

  return (
    <div className='flex mt-[150px] justify-center'>
      <div className='w-5/6 flex flex-col gap-10'>
        <h1 className='flex items-center text-xl text-gray-500'><HomeIcon sx={{ marginRight: "5px" }} /> / Register </h1>
        <div className='flex flex-col gap-5 px-6 py-16 w-3/6 self-center items-center mb-16 rounded-md '>
          <h1 className='text-4xl font-semibold text-gray-800'>Register</h1>
          <form className='flex flex-col w-full gap-4' onSubmit={handleSubmit} >
            <TextField name='username' onChange={handleChange} value={form.username} label="Username" placeholder='Enter Username' />
            <TextField name='password' onChange={handleChange} value={form.password} label="Password" type='password' placeholder='Enter Password' />
            <TextField name='email' onChange={handleChange} value={form.email} label="Email" type='email' placeholder='Enter Email eg: johndoe@gmail.com' />
            <div className='flex items-center gap-6 justify-between '>
              <div className='w-5/6'>
                <InputLabel htmlFor="file">Profile Image</InputLabel>
                <Input fullWidth type='file' id='file' onChange={(e)=>setFile(e.target.files[0])}></Input>
              </div>
              <div className='flex items-center'>

                <label className="label cursor-pointer flex items-center gap-3">
                  <span className="label-text">Seller</span>
                  <input type="checkbox" className="toggle" onChange={handleSeller}  />
                </label>

              </div>

            </div>

            <TextField name='phone' onChange={handleChange} value={form.phone} label="Phone" pattern='[0-9]{5}-[0-9]{5}' type='number' placeholder='Enter Phone Number' />
            <TextField name='country' onChange={handleChange} value={form.country} label="Country" type='text' placeholder='Enter Country' />
            <InputLabel id="text-area">Description</InputLabel>
            <textarea name='description' onChange={handleChange} placeholder='Short description about your self...' id='s-desc' className='border-[1px] border-gray-400 p-3 ' cols={30} rows={6}  ></textarea>
            <Button type='submit' variant='contained' color='success' >Register</Button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register