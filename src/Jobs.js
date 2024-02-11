import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
export default function Home() {
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
            let data = await response.json();
            data=JSON.stringify(data)
            console.log(data);
            const size = data.length
let tab=""
            console.log(size)
            for( let i=0;i<size;i++)
           {
           tab+=
        `<table border="1" >
        <tr">
          <td>${data[i].id}</td>
          <td>${data[i].role}</td>

          <td>${data[i].stipend}</td>
          <td>${data[i].duration}</td>
        </tr>
      </table>`
    }
    document.querySelector("#apidata").innerHTML=tab
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
      <tbody id="apidata">
      {/* api data */}
    </tbody>
         <br></br>
         
      </div>
    </div> 
  ) 
} 
  