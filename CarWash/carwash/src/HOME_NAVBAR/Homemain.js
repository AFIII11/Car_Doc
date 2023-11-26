import React from 'react'
import './home.css'

export default function Homemain() {
  const role=localStorage.getItem('log')
  const islogin=localStorage.getItem('login_id')
  const removeid=()=>{
    localStorage.removeItem('log')
    localStorage.removeItem('login_id')
  }
  return (
    <>
  {role=="admin"?
   <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
   <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse textcolor" id="navbarNav">
       <ul class="navbar-nav mx-auto">
         <li class="nav-item">
           <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
         </li>
         <li class="nav-item">
           <a class="nav-link text-white" href="/Takeme">Doc</a>
         </li>
         <li class="nav-item">
           <a class="nav-link text-white" href="/Price">Pricing</a>
         </li>
         <li class="nav-item">
           <a class="nav-link text-white" href="/Review">Review</a>
         </li>
         <li onClick={removeid} class="nav-item">
           <a class="nav-link text-white" href="/Login">
            {islogin?'Logout':'Login'
            }</a>
         </li>
         <li class="nav-item">
           <a class="nav-link text-white" href="/Booking">Booking</a>
         </li>
         <li class="nav-item">
           <a class="nav-link text-white" href="/view">View</a>
         </li>
       </ul>
     </div>
   </div>
 </nav>:role=="user"?
  <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse textcolor" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/Takeme">Doc</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/Price">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/Review">Review</a>
        </li>
        <li onClick={removeid} class="nav-item">
           <a class="nav-link text-white" href="/Login">
            {islogin?'Logout':'Login'
            }</a>
         </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/Booking">Booking</a>
        </li>
      </ul>
    </div>
  </div>
</nav>:

<nav class="navbar navbar-expand-lg bg-transparent fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse textcolor" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/Takeme">Doc</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/Price">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/Review">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/Login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
}
 
    
    
    
    
    
    
    </>
  )
}
