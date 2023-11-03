import React from 'react'
import './home.css'

export default function Homemain() {
  return (
    <>
  
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
      </ul>
    </div>
  </div>
</nav>
    
    
    
    
    
    
    </>
  )
}
