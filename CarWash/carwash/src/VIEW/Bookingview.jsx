import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Homemain from '../HOME_NAVBAR/Homemain';
import './Bookingview.css';

function Bookingview() {
  const [state, setState] = useState(null);
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/Getsinglebooking/${id}`)
      .then((res) => {
        setState(res.data.data);
        setCategory(res.data.data2);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="card-container">
      {state ? (
        <div className="card">
          <ul>
            <li>Name: {state.name}</li>
            <li>PhoneNumber: {state.phone}</li>
            <li>Date: {state.date}</li>
            <li>Time: {state.time}</li>
            <li>Purpose:</li>
            <div className="categorydiv">
              <Homemain />
              {category?.map((value, key) => (
                <li key={key}>{value.name}</li>
              ))}
            </div>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Bookingview;
