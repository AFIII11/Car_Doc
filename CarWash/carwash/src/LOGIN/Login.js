import React, { useState } from 'react'
import './Login.css';
import Homemain from '../HOME_NAVBAR/Homemain';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
const nav  = useNavigate()
  const [state,setState] = useState()
  const inputchange=(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
  }
  
  const submit=()=>{
    console.log(state);
    axios.post('http://127.0.0.1:8000/api/LoginUserAPIView',state).then((response)=>{
      
      localStorage.setItem('log',response.data.data.role)
      localStorage.setItem('login_id',response.data.data.login_id)
    console.log(response.data.data);
    
    nav('/')
    }).catch((error)=>{
      console.log(error);
      toast.warn('Login Failed', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    })
  }

  return (
    <>
    <Homemain/>
    <div className='bgnn'>
        <ToastContainer/>
    <div class="login-box">
  <p>Login</p>
  <form>
    <div class="user-box">
      <input required="" name="username" type="text" onChange={inputchange}></input>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input required="" name="password" type="password" onChange={inputchange}></input>
      <label>Password</label>
    </div>
    <a href="#" onClick={submit}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p><u>Don't have an account?</u> <a href="/Register" class="a2"><u>Sign up!</u></a></p>
</div>
    </div>
    </>
  )
}
