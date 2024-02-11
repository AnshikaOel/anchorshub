import React, { useEffect, useState } from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom';

export default function OTP() {
  const navigate=useNavigate();
  const  [userOTP,setuserOTP]=useState('')
  const location = useLocation();
  const {state:{info}}=location
  useEffect(()=>{ 
    console.log('Recieved props in otp are',info) 
  },[info])
  
  const handleregistration=async(e)=>{
    try{
    const response=await fetch("http://localhost:5000/userInfo",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
    body:JSON.stringify(info),
    }) 
    if(response.ok){
      console.log("Data saved succcessfully on server")
    }else{
      navigate('/registration')
      console.log("Failed to save data server"+response.status)
    }
    }catch(err){
      console.error(err)
    }
}
  const SubmitOTP=async(e)=>{
    e.preventDefault();  
    try{
      const response=await fetch('http://localhost:5000/verifyOTP',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',    
        },
        body:JSON.stringify({userOTP})
      })
      const responseData=await response.json()
      if(responseData.message=='true'){
        console.log("this is otp--"+responseData.message)
        handleregistration()
        let id=info.id
        console.log(id)
        navigate('/profile',{state:{id}})
      }else{
        navigate('/registration')
      }
    }catch(error){
      console.error('Error sending data ',error)
    }
  }
  return (
    <div>
    <div className='navBar'>
    <form className="row g-3" action="/submit" method="post" onSubmit={SubmitOTP}>
      <div>
      <label for="otp"><h1>Enter the OTP send on Your Email</h1></label>
      <input type='text' minLength={4} maxLength={4} className='otpbox' value={userOTP} onChange={(e)=>{setuserOTP(e.target.value)}}></input>
      <br></br>
      <center><button type='submit' className='btn btn-primary submitText' >Submit</button></center>
      </div>
    </form>  
    </div>
    </div>
  )
}