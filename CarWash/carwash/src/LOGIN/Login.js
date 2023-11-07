import React from 'react'
import './Login.css';
import Homemain from '../HOME_NAVBAR/Homemain';



export default function Login() {
  return (
    <>
    <Homemain/>
    <div className='bgnn'>
        
    <div class="login-box">
  <p>Login</p>
  <form>
    <div class="user-box">
      <input required="" name="" type="text"></input>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="password"></input>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>Don't have an account? <a href="/Register" class="a2">Sign up!</a></p>
</div>
    </div>
    </>
  )
}
