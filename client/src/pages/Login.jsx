
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, TextField } from '@mui/material';
import makeRequest from '../utils/makeRequest';
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const [err, setErr] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e)=>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
        setErr(null)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await makeRequest.post('/api/auth/login',{
        username: form.username,
        password: form.password
      })
      localStorage.setItem('currentUser', JSON.stringify(response.data))
      navigate('/')

      console.log(response.data);
    } catch (error) {
      setErr(error.response.data)
      console.log(error.response.data);
    }
   

  }

  return (
    <div className='flex mt-[150px] justify-center'>
      <div className='w-5/6 flex flex-col gap-10'>
            <h1 className='flex items-center text-xl text-gray-500'><HomeIcon sx={{marginRight: "5px"}}/> / Login </h1>
            <div className='flex flex-col gap-5 px-6 py-16 w-3/6 self-center items-center mb-16 rounded-md '>
            <h1 className='text-4xl font-semibold text-gray-800'>Login</h1>
            <form className='flex flex-col w-full gap-4' onSubmit={handleSubmit}>
                  <TextField name='username'  onChange={handleChange} value={form.username} label="Username" placeholder='Enter Username'/>
                  <TextField  name='password' onChange={handleChange} value={form.password} label="Password" type='password' placeholder='Enter Password'/>
                  <p className='text-red-600'>{err && err}</p>
                  <Button type='submit'  variant='contained' color='success'>Log In</Button>
            </form>
            </div>
            
      </div>
    </div>
  )
}

export default Login