import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Registration() {
    
    const [fname,fnamechange]=useState("")
    const [lname,lnamechange]=useState("")
    const [id,idchange]=useState("")
    const [coin,updateCoin]=useState('2')
    const navigate=useNavigate();
    var generatedOTP=0
    let info = { id, fname, lname, coin};
    

    const validateAll=(e)=>{
      e.preventDefault();
        handleGeneatedOTP()
        navigate('/OTP',{state:{info}})
    } 

    const sendOtpEmail = async () => {
      try {
        const response = await axios.post('http://localhost:5000/sendmail', { id, generatedOTP });
        console.log(response.data);
      } catch (error) {
        console.error('Error sending OTP email:', error);
      }
    };

const handleGeneatedOTP=async()=>{
  try{
    const response=await fetch('http://localhost:5000/generateOTP',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
    })
    console.log(response)
   if(response.ok){
    const data=await response.json()
    if(data && data.otp !== undefined) {
      generatedOTP=data.otp
      console.log(generatedOTP)
    //   sendOtpEmail()
    }else{
      console.log('Invalid response format from the server');
    }
   }else{
    console.log('Failed to generate OTP')
   }
  }catch(error){
    console.log("Error geneating OTP : ",error)
  }
}
    return (
    <div >
    <div className='navBar'>
      <h3>Create Your Account</h3>
      <br></br>
      <form className="row g-3" action="/submit" method="post" onSubmit={validateAll}>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">First Name</label>
          <br></br>
          <input type="text" className="form-control" value={fname} onChange={(e)=>fnamechange(e.target.value)} required></input>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Last Name</label>
          <br></br>
          <input type="text" className="form-control" value={lname} onChange={(e)=>lnamechange(e.target.value)} required></input>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Email</label>
          <br></br>
          <input type="email" className="form-control" value={id} onChange={(e)=>idchange(e.target.value)} required></input>
        </div>
        <div className="col-12">
          <button type='submit' className='btn btn-primary'>Sent OTP</button>
        </div>
      </form>
    </div>
    </div>
  )
}
 