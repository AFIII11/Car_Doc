import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Homemain from '../HOME_NAVBAR/Homemain'
import './Bookingview.css'


function Bookingview() {
  const [state,setState]=useState()
  const [category,setCategory]=useState()
    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/Getsinglebooking/${id}`).then((res)=>{
        console.log(res);
        setState(res.data.data)
        setCategory(res.data.data2)
      }).catch((error)=>{
        console.log(error);
      })
    },[])
  useEffect(()=>{
    console.log(state);
    console.log(category);
  },[state,category])
    console.log(id);
  return (
    <div className='desi'>{state?
      <>
      <li>Name: {state.name}</li>
      <li>PhoneNumber: {state.phone}</li>
      <li>Date: {state.date}</li>
      <li>Time: {state.time}</li>
      Purpose:
      <div className='categorydiv'>
        <Homemain/>
      {category?.map((value,key)=>(
        <>
        <li> {value.name}</li>
        </>
      ))}
      </div>
      </>:null
    }
     
      </div>
  )
}

export default Bookingview