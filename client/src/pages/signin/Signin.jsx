import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/userReducer';
import { useNavigate } from 'react-router';

const Signin = () => {
  const [signType, setSignType] = useState('login');
  const API_KEY = import.meta.env.VITE_API_KEY
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    console.log(e.target.value)
    setData((perv) => {
      return {...perv, [e.target.name]: e.target.value}
    })
  }
  console.log(data)


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (signType === 'register') {
      try {
        const user = await axios.post(`${API_KEY}/auth/register`, data)
        setSignType('login')
      } catch (error) {
        console.log('Error while logging in', error)
      }
    }else {
      try {
        const user = await axios.post(`${API_KEY}/auth/login`, {
          email: data.email,
          password: data.password,
        })
        dispatch(login(user))
        navigate('/')
      } catch (error) {
        console.log('Error while logging in', error)
      }
    }
  }

  return (
    <div style={{marginTop: '100px', marginInline: '50px'}}>
      <form>
        {signType === 'register' ? (
          <>
            <input value={data.firstName} name="firstName" onChange={handleChange} type="text" placeholder='firstName' />
            <input value={data.lastName} name="lastName" onChange={handleChange} type="text" placeholder='lastName' />
            <input value={data.email} name="email" onChange={handleChange} type="email" placeholder='email' />
            <input value={data.password} name="password" onChange={handleChange} type="text" placeholder='password' />
            <input value={data.phone} name="phone" onChange={handleChange} type="number" placeholder='phone' />
            <input value={data.address} name="address" onChange={handleChange} type="text" placeholder='address' />
          </>
        ) : (
          <>
            {/* <input value={data.phone} name="phone" onChange={handleChange} type="number" placeholder='phone' /> */}
            <input value={data.email} name="email" onChange={handleChange} type="email" placeholder='email' />
            <input value={data.password} name="password" onChange={handleChange} type="text" placeholder='password' />
          </>
        )}
        <button onClick={handleSubmit}>submit</button>
      </form>
      {signType === 'register' ? (<button onClick={() => {setSignType('loign')}}>Already have account</button>) : (<button onClick={() => {setSignType('register')}}>Don't have an accoun?</button>)}
    </div>
  )
}

export default Signin