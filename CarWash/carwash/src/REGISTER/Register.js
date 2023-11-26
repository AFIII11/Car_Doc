import React, { useState } from 'react'
import './Register.css';
import Homemain from '../HOME_NAVBAR/Homemain';
import axios from 'axios';

export default function Register() {
const [state,setState] = useState()
  const inputChange = (e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
  }
  const submit = ()=>{
    console.log(state);
    axios.post('http://127.0.0.1:8000/api/UserRegisterSerializerAPIView',state).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <>
    <Homemain/>
    <div className='bgnn'>
        
    <div class="login-box">
  <p>Register</p>
  <form>
    <div class="user-box">
      <input required="" name="name" type="text" onChange={inputChange}></input>
      <label>FirstName</label>
    </div>
    <div class="user-box">
      <input required="" name="lastName" type="text" onChange={inputChange}></input>
      <label>LastName</label>
    </div>
    
    <div class="user-box">
      <input required="" name="email" type="text" onChange={inputChange}></input>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input required="" name="username" type="text" onChange={inputChange}></input>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input required="" name="password" type="password" onChange={inputChange}></input>
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
  <p><u>Allready Have An Account ? </u><a href="/Login" class="a2"><u>Login!</u></a></p>
</div>
    </div>
    </>
  )
}
