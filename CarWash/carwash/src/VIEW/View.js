import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './View.css'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import Homemain from '../HOME_NAVBAR/Homemain';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function View() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [state, setState] = useState()
    const [maildata,setmaildata]=useState()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Getallusers').then((res) => {
            console.log(res);
            setState(res.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    useEffect(() => {
        // Log the state whenever it changes
        console.log('Updated State:', state);
    }, [state]);
    const Gotobooking = (id) => {
        console.log(id);
        navigate(`/Bookingview/${id}`)


    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const inputchange=(event,mail)=>{
        const {name,value}=event.target
        setmaildata({...maildata,[name]:value,['email']:mail}
            )
      }
      console.log(maildata);
  const Send=()=>{
    axios.post('http://127.0.0.1:8000/api/sendmailmethod',maildata).then((res)=>{
        console.log(res);
        toast.success('Message Sent Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
    }).catch((error)=>{
        console.log(error);
    })
  }
   
        return (
            <div className='mainnn'>
              <ToastContainer/>
              <div className='viewcard'>
                {state?.map((value, key) => (
                  <div className='viewinner' key={key}>
                    <Homemain />
                    <div className="details">
                      <div className="info">
                        <Typography variant="h6">{value.name}</Typography>
                        <Typography variant="body1">{value.lastName}</Typography>
                        <Typography variant="body2">{value.email}</Typography>
                      </div>
                      <div className="actions">
                        <button className='btn bg-secondary mt-3' onClick={() => Gotobooking(value.log_id)}>Show Booking</button>
                        <Button onClick={handleOpen}>Reply</Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <label style={{ color: 'black' }}>Type your message</label>
                            <input type='text' name='subject' onChange={(e) => inputchange(e, value.email)}></input>
                            <button className='btn bg-secondary mt-2' onClick={Send}>Send</button>
                          </Box>
                        </Modal>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        
        export default View;
        


