import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
export default function Jobs() {
  const [data, setData] = useState([]);
    const jobs = async () => {
        console.log("kjbvjxkbv bjxbvbjkbnvj");
        try {
          const response = await fetch('http://localhost:5000/internship/fetch/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          });
          if (response.ok) {
              let dataSet = await response.json();
              setData(dataSet)
          } else {
            console.log('Failed to fetch data');
          }
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      }; 
      useEffect(() => {
        jobs(); 
      }, []);
    
  return (
    <div onLoad={jobs}>
      <h1 className='Heading' id='title'>AnchorsHUB</h1>
      <div className='navBar'> 
         <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Role</th>
              <th>Stipend</th>
              <th>Company Name</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody id="apidata">
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.role}</td>
                <td>{item.stipend}</td>
                <td>{item.company.name}</td>
                <td>{item.duration}</td>
                <button>Apply</button>
              </tr>
            ))}
          </tbody>
        </table>
         <br></br>
         
      </div>
    </div> 
  ) 
} 
  