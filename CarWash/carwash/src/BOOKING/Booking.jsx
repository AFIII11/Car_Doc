import React, { useEffect, useState } from 'react';
import Homemain from '../HOME_NAVBAR/Homemain';
import './Booking.css';
import axios from 'axios'


export default function Booking() {
  const login_id=localStorage.getItem('login_id')
  const [showOptions, setShowOptions] = useState(false); 
  const [state,setState]=useState(
   { name: '',
    phone: '',
    date: '',
    time: '',
    category: [],
    log_id:login_id,
  }
  )

  const toggleOptions = (e) => {
    e.preventDefault()
    setShowOptions(!showOptions);
  };
   const inputChange=(e)=>{
    const {name,value}=e.target
    setState({...state,[name]:value})

   
   }
   useEffect(() => {
    console.log('Updated State:', state);
  }, [state]); // Log the state whenever it changes
   const submit=()=>{
    axios.post('http://127.0.0.1:8000/api/bookingmethod',state).then((res)=>{
      console.log(res);
    }).catch((error)=>{
      console.log(error);
    })
    
   }
   const categoryUpdate=(e)=>{
    const {name,value}=e.target
    const updatestate=[...state.category,value]
    console.log(updatestate);
    setState({ ...state, category: updatestate });

   }

  return (
    <>
      <Homemain />
      <div className='bgnn'>
        <div className="login-box">
          <p>Booking</p>
          <form>
            <div className="user-box">
              <input required="" name="name" type="text" onChange={(e)=>inputChange(e)}></input>
              <label>Name</label>
            </div>
            <div className="user-box">
              <input required="" name="phone" type="tel" onChange={(e)=>inputChange(e)}></input>
              <label>Phone</label>
            </div>
            <div className="user-box">
              <input required="" name="date" type="date" onChange={(e)=>inputChange(e)}></input>
              <label>Date</label>
            </div>
            <div className="user-box">
              <input required="" name="time" type="time" onChange={(e)=>inputChange(e)}></input>
              <label>Time</label>
            </div>
            <div className="dropdown">
              <button onClick={(e)=>toggleOptions(e)}>Select Options</button>
              {showOptions && (
                <div className="dropdown-content dropclass">
                  <label><input name='category' type="checkbox" value="1" onChange={(e)=>categoryUpdate(e)}></input> Engine</label>
                  <label><input name='category' type="checkbox" value="2" onChange={(e)=>categoryUpdate(e)}></input> Alloy</label>
                  <label><input name='category' type="checkbox" value="3" onChange={(e)=>categoryUpdate(e)}></input> Carwash</label>
                  <label><input name='category' type="checkbox" value="4" onChange={(e)=>categoryUpdate(e)}></input> Exhaust</label>
                  <label><input name='category' type="checkbox" value="5" onChange={(e)=>categoryUpdate(e)}></input> Spoiler</label>
                  <label><input name='category' type="checkbox" value="6" onChange={(e)=>categoryUpdate(e)}></input> Painting</label>
                  <label><input name='category' type="checkbox" value="7" onChange={(e)=>categoryUpdate(e)}></input> Interior</label>
                  <label><input name='category' type="checkbox" value="8" onChange={(e)=>categoryUpdate(e)}></input> Lamp</label>
                  <label><input name='category' type="checkbox" value="9" onChange={(e)=>categoryUpdate(e)}></input> Turbo</label>
                  <label><input name='category' type="checkbox" value="10"onChange={(e)=>categoryUpdate(e)}></input> Brake</label>
                </div>
              )}
            </div>
            <a href="#" onClick={submit}>
              
              Submit
            </a>
          </form>
          <p><a>Allready Have An Account ?</a> <a href="/Login" className="a2">Login!</a></p>
        </div>
      </div>
    </>
  );
}
