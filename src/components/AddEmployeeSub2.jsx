import React from 'react'
import {BiUpload} from "react-icons/bi"
import "./cssForComponents/addEmployeeSub2.css"
const AddEmployeeSub2 = ({BASE_URL}) => {
  return (
    <div className='add-container'>
      <h3>Upload Your CSV File Here</h3>
      <p>Note: Your csv file must contain the format shown below:</p>
      <table>
        <tr>Name</tr>
        <tr>Email</tr>
      </table>
      <div>
        <input type='file' required />
        <button><BiUpload /></button>
      </div>
      

    </div>
  )
}

export default AddEmployeeSub2
