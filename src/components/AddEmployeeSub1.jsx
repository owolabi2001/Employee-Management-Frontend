import React from 'react'
import { useState } from 'react';
import axios from 'axios';


let res = {}
const AddEmployeeSub1 = ({BASE_URL}) => {
    const [staffName, setStaffName] = useState("");
  const [email, setEmail] = useState("");
  const [staffId, setStaffId] = useState("");
  const [role, setRole] = useState("");

  const [timer,setTimer] = useState(false);
  const [message,setMessage] = useState("")


  

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsResponseVisible(true);
   
    axios({
      method: "post",
      url: BASE_URL +"/addEmployee",
      data: {
        "staffName":staffName,
        "email":email,
        "staffId":staffId,
        "role": role
      }
    }).then((response)=>{
      // console.log(response);
      res = response.data
      setMessage(res.message);
      console.log(res)
      setTimer(true)
      console.log(timer)

      setTimeout(
        ()=>{
          setTimer(false)
        }, 1500
      );

      }
      
      
    ).catch(
      (error) =>{
        console.log("The error is: ",error)
      }
    )
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
    <div className={timer?'add-container':"none"}>
      <p className='response'>{message}</p>
    </div>
  </>
  )
}

export default AddEmployeeSub1
