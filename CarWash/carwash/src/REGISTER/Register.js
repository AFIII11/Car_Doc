import React from 'react'
import './Register.css';
import Homemain from '../HOME_NAVBAR/Homemain';

export default function Register() {
  return (
    <>
    <Homemain/>
    <div className='bgnn'>
        
    <div class="login-box">
  <p>Register</p>
  <form>
    <div class="user-box">
      <input required="" name="" type="text"></input>
      <label>FirstName</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text"></input>
      <label>LastName</label>
    </div>
    
    <div class="user-box">
      <input required="" name="" type="number"></input>
      <label>PhoneNumber</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text"></input>
      <label>Email</label>
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
  <p>Allready Have An Account ? <a href="/Login" class="a2">Login!</a></p>
</div>
    </div>
    </>
  )
}
