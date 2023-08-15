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
  const [foundUser, setFoundUser] = useState(true);
  const [wrongPass, setWrongPass] = useState(false);
  const [isEmptyField, setIsEmptyField] = useState(false);
  const [isUnvalidPass, setIsUnvalidPass] = useState(false);
  const [unvalidEmail, setUnvalidEmail] = useState(false);
  const [data, setData] = useState({
    firstName : '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setData((perv) => {
      return {...perv, [e.target.name]: e.target.value}
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (signType === 'register') {
      // validate form
      if (data.email === '' | data.password === '' | data.firstName === '' || data.lastName === '' || data.phone === '') {
        setIsEmptyField(true)
      }else {
        setIsEmptyField(false)
      }
      data.password.length < 4 ? setIsUnvalidPass(true) : setIsUnvalidPass(false)
      !data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? setUnvalidEmail(true) : setUnvalidEmail(false)

      if (!isEmptyField && !isUnvalidPass && !unvalidEmail) {
        try {
          const user = await axios.post(`${API_KEY}/auth/register`, data)
          setSignType('login')
        } catch (error) {
          console.log('Error while logging in', error)
        }
      }
    }else {
      try {
        const user = await axios.post(`${API_KEY}/auth/login`, {
          email: data.email,
          password: data.password,
        })
        dispatch(login(user.data))
        navigate('/')
      } catch (error) {
        error.response.status === 404 ? setFoundUser(false) : setFoundUser(true)
        error.response.status === 401 ? setWrongPass(true) : setWrongPass(false)
        console.log('Error while logging in', error)
      }
    }
  }

  return (
    <div style={{marginTop: '100px', marginInline: '50px'}}>
      <h1>{signType === 'register' ? 'Register' : 'Login'}</h1>
      <form>
        {signType === 'register' ? (
          <>
            <input value={data.firstName} name="firstName" onChange={handleChange} type="text" placeholder='firstName' required />
            <input value={data.lastName} name="lastName" onChange={handleChange} type="text" placeholder='lastName' required />
            <input value={data.email} name="email" onChange={handleChange} type="email" placeholder='email' required />
            <input value={data.password} name="password" onChange={handleChange} type="text" placeholder='password' required />
            <input value={data.phone} name="phone" onChange={handleChange} type="number" placeholder='phone' required />
            <input value={data.address} name="address" onChange={handleChange} type="text" placeholder='address' required />
            {isUnvalidPass && <p>password must be greater than 3 letters</p>}
            {isEmptyField && <p>all fileds are required ecxept the address</p>}
            {unvalidEmail && <p>unvalid email</p>}
          </>
        ) : (
          <>
            {/* <input value={data.phone} name="phone" onChange={handleChange} type="number" placeholder='phone' /> */}
            <input value={data.email} name="email" onChange={handleChange} type="email" placeholder='email' required />
            <input value={data.password} name="password" onChange={handleChange} type="text" placeholder='password' required />

            {!foundUser && <p>user not found</p>}
            {wrongPass && <p>wrong password</p>}
          </>
        )}
        <button onClick={handleSubmit}>submit</button>
      </form>
      {signType === 'register' ? (<button onClick={() => {setSignType('loign')}}>Already have account</button>) : (<button onClick={() => {setSignType('register')}}>Don't have an accoun?</button>)}
    </div>
  )
}

export default Signin