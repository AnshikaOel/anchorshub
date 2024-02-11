import React, { useEffect, useState } from 'react'
import { Link, useNavigate,useLocation, json } from 'react-router-dom';
export default function Home() {
  const navigate=useNavigate();
  const  [userOTP,setuserOTP]=useState('')
  const location = useLocation();
  const {state:{id}}=location
  
  console.log(id)
  const [Mobile,setMobile]=useState("")
  const [LinkedIn,setLinkedIn]=useState("")
  const [GitHub,setGitHub]=useState("")
  const [College,setCollege]=useState("")
  const [StartDate,setStartDate]=useState("")
  const [EndDate,setEndDate]=useState("")


  const save_data=async(action)=>{
    if(action=='Mobile')
    {
        const data={
            id:id,
            Mobile:Mobile,
            coinadd:10
          }
          fetch(`http://localhost:5000/post_save`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    })
    .then(response=>response.json()
    .then(data1=>{
      console.log("Data Added Successfully : ",data1)
    })
    .catch(error=>{
      console.error("Error adding data : ",error)
    }))
    }
    if(action=='LinkedIn')
    {
        const data={
            id:id,
            LinkedIn:LinkedIn,
            coinadd:3
          }
          fetch(`http://localhost:5000/post_save`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    })
    .then(response=>response.json()
    .then(data1=>{
      console.log("Data Added Successfully : ",data1)
    })
    .catch(error=>{
      console.error("Error adding data : ",error)
    }))
    }
    if(action=='GitHub')
    {
        const data={
            id:id,
            GitHub:GitHub,
            coinadd:5
          }
          fetch(`http://localhost:5000/post_save`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    })
    .then(response=>response.json()
    .then(data1=>{
      console.log("Data Added Successfully : ",data1)
    })
    .catch(error=>{
      console.error("Error adding data : ",error)
    }))
    }
    if(action=='College')
    {
        const data={
            id:id,
            College:College,
            coinadd:5
          }
          fetch(`http://localhost:5000/post_save`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    })
    .then(response=>response.json()
    .then(data1=>{
      console.log("Data Added Successfully : ",data1)
    })
    .catch(error=>{
      console.error("Error adding data : ",error)
    }))
    }
    if(action=='StartDate')
    {
        const data={
            id:id,
            StartDate:StartDate,
            coinadd:2
          }
          fetch(`http://localhost:5000/post_save`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    })
    .then(response=>response.json()
    .then(data1=>{
      console.log("Data Added Successfully : ",data1)
    })
    .catch(error=>{
      console.error("Error adding data : ",error)
    }))
    }
    if(action=='EndDate')
    {
        const data={
            id:id,
            EndDate:EndDate,
            coinadd:2
          }
          fetch(`http://localhost:5000/post_save`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    })
    .then(response=>response.json()
    .then(data1=>{
      console.log("Data Added Successfully : ",data1)
    })
    .catch(error=>{
      console.error("Error adding data : ",error)
    }))
    }
    
  }

  return (
    <div>
      <h1 className='Heading' id='title'>AnchorsHUB</h1>
      <Link to='/jobs'>JOBS</Link>
      <br></br>
      <b>Complete Your Profile</b>
      <div className='navBar'> 
        <div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Mobile : </label>
          <input type="text" className="form-control" value={Mobile} onChange={(e)=>setMobile(e.target.value)} required></input>
          <button className='btn btn-primary'onClick={save_data('Mobile')}>Update</button>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">LinkedIn Link : </label>
          <input type="text" className="form-control" value={LinkedIn} onChange={(e)=>setLinkedIn(e.target.value)} required></input>
          <button className='btn btn-primary' onClick={save_data('LinkedIn')}>Update</button>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">GitHub Link : </label>
          
          <input type="text" className="form-control" value={GitHub} onChange={(e)=>setGitHub(e.target.value)} required></input>
          <button className='btn btn-primary'onClick={save_data('GitHub')}>Update</button>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">College Name : </label>
          
          <input type="text" className="form-control" value={College} onChange={(e)=>setCollege(e.target.value)} required></input>
          <button className='btn btn-primary'onClick={save_data('College')}>Update</button>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Start Date : </label>
          
          <input type="text" className="form-control" value={StartDate} onChange={(e)=>setStartDate(e.target.value)} required></input>
          <button className='btn btn-primary'onClick={save_data('StartDate')}>Update</button>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">End Date : </label>
          
          <input type="text" className="form-control" value={EndDate} onChange={(e)=>setEndDate(e.target.value)} required></input>
          <button className='btn btn-primary'onClick={save_data('EndDate')}>Update</button>
        </div>
        </div> 
        <br></br>
      </div>
      
    </div> 
  ) 
} 
  