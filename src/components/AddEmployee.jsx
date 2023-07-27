import React from 'react'
import './cssForComponents/addEmployee.css'
import { useState } from 'react'
import EmployeeRender from './EmployeeRender';
import axios from 'axios';

const APIURL = "http://localhost:8080/employee"
const AddEmployee = () => {

  
  const [staffName, setStaffName] = useState("");
  const [email, setEmail] = useState("");
  const [staffId, setStaffId] = useState("");
  const [role, setRole] = useState("");

 
  const formInfo = {
    "name":staffName,
    "email":email,
    "staffId": staffId,
    'role': role
  }

  // const responseInfo = {};
  const headers = {
    "content-type": "application/json",
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formInfo);
    axios.post(APIURL,formInfo,{withCredentials: true})
    .then(
      response =>{
        console.log(response);
        // responseInfo = response
      })
    .catch( 
      error =>{
      console.log("Nothing to show "+ error);
    })
    };


  return (
    <>
      <div className="add-container">
      <form className='add-employee-form' onSubmit={handleSubmit}>
        <div className='form-inputs'>
          <input className="staffName" type="text" value={staffName} 
          onChange={(e)=>{setStaffName(e.target.value)}} placeholder='Staff Name'/>

          <input className="email" type="text" value={email} 
          onChange={ (e)=>{setEmail(e.target.value)}} placeholder='Email'/>

          <input className="staffId" value={staffId} 
          onChange={(e)=>{setStaffId(e.target.value)}} placeholder='Staff Id'/>

          <input className="role" value={role} 
          onChange={(e)=>{setRole(e.target.value)}} placeholder='Role'/>
        </div>

        
        <button type='submit'>Submit</button>
      </form>
      
      
    </div>
    <EmployeeRender info={formInfo} />
    
    
    </>
    
  )
}

export default AddEmployee
