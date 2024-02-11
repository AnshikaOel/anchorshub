import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h1 className='Heading' id='title'>AnchorsHUB</h1>
      <div className='navBar'> 
         <br></br>
        <div className='formSec'>
          <button className='btn btn-primary submitText'><Link to='/registration' className="linkStyle">Create Account</Link></button>
          <br></br>
          <h3 className='Heading'>Already have a Account</h3>
          <br></br>
          <button  className='btn btn-primary submitText'><Link to='/login' className="linkStyle">Login</Link></button>
        </div>
      </div>
    </div> 
  ) 
} 
  