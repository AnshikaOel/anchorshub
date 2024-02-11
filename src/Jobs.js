import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {

    function jobs(){
        const response=fetch('http://localhost:5000/generateOTP',{
            method:'GET',
            headers:{
                'Con'
            }
        })
    }

  return (
    <div onLoad={jobs}>
      <h1 className='Heading' id='title'>AnchorsHUB</h1>
      <div className='navBar'> 
         <br></br>
        <p className='jobs'></p>
      </div>
    </div> 
  ) 
} 
  