import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Login() { 
 
  const navigate=useNavigate()
  const [id,idUpdate]=useState('')
  const [OTP,OTPUpdate]=useState('')
  
  console.log("THis is login & apassword -- "+id+" & "+OTP)
  const ProceedLogin=async(e)=>{
    e.preventDefault()
    if(validate())
    {
      console.log('procedd')
      try{
      const resp=await fetch(`http://localhost:5000/login`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({id})
      })
      const a= await resp.json()
        if(resp.ok){
          if(a.success){
            navigate('/feed',{state:{id}})
          }else{
            navigate('/login')
            toast.error('Login Failed due to Wrong Login Cresdentials')
          }
        }else{
          navigate('/login')
          toast.error('Login Failed due to Wrong Login =Cresdentials')
        }
      }catch(err){
        toast.error('Login Failed due to : '+err.message)
      }
  }
}
  const validate=()=>{
    let result=true;
    if(id==='' || id===null){
      result=false
      toast.warning('Please enter a Email Id')
    }
    if(OTP==='' || OTP===null){
      result=false
      toast.warning('Please Enter a OTP')
    }
    return result
  } 
 
  return (
    <div >
      <div className='navBar'>
        <form action="/submit" method="post" onSubmit={ProceedLogin} className="row g-3">
            <div>
              <h2>User Login</h2>
            </div>
            <div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type='text' className="form-control"  value={id} onChange={e=>idUpdate(e.target.value)}></input>
              </div>
              <div className="col-md-6">
                <label className="form-label">OTP</label>
                <input type='password' className="form-control"  value={OTP} onChange={e=>OTPUpdate(e.target.value)}></input>
              </div>
              <br></br>
              <button type='submit' className='btn btn-primary'>Send OTP</button>
            </div>
            <div className="col-md-6">
              <button type='submit' className='btn btn-primary'>Submit</button>
              <Link className="linkStyle btn btn-primary"to={'/registration'} >New User</Link>
            </div>
        </form>
      </div>
    </div>
  )
}
