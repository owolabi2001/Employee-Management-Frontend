import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {BiUpload} from "react-icons/bi"
import "./cssForComponents/addEmployeeSub2.css"
import { useEmployeeContext } from '../EmployeeContext'
const AddEmployeeSub2 = () => {
  const {BASE_URL} = useEmployeeContext();

  const [file, setFile] = useState(null);

  const handlefileChange = (event)=>{
    setFile(event.target.files[0]);
  }

  const handleUpload = ()=>{
    const formData = new FormData();
    formData.append("file",file) 
    axios.post(BASE_URL+"/addEmployee/CSV",formData, {
      headers:{
        "Content-Type": "multipart/form-data"
      }
    }).then(
      (response)=>{
        console.log(response.data)
        alert("File has been uploaded")
      }).catch(
        (error)=>{
          console.log(error)
        }
      )
  }
  
  return (
    <div className='add-container'>
      <h3 className='top'>Upload Your CSV File Here</h3>
      <p className='short-info'>Note: Your csv file must follow the example below:</p>
      <table>
        <tr>
          <th>staffName</th>
          <th>Email</th>
          <th>staffId</th>
          <th>role</th>
        </tr>
        <tr>
          <td>Ben Paul</td>
          <td>ben.paul@AxeCap.com.ng</td>
          <td>043R1085</td>
          <td>Backend Developer</td>
        </tr>
        <tr>
          <td>Shola AwoKetu</td>
          <td>shola.awoketu@AxeCap.com.ng</td>
          <td>043R1086</td>
          <td>Frontend Developer</td>
        </tr>
      </table>
      <div className='file-div'>
        <label className='drop-container'>
          <span class="drop-title">Drop CSV file here</span>
          <input className="file" type='file' onChange={handlefileChange}/>
        </label>
        <button className="file-btn" onClick={handleUpload}>
          <BiUpload className="icon-btn" size={30} style={{color: '#4f033d'}}/>
        </button>
      </div>
    
    </div>
  )
}

export default AddEmployeeSub2
