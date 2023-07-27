import React from 'react'
import "./cssForComponents/employeeRender.css"

const EmployeeRender = ({info}) => {
  return (
    <div className='add-container'>
      <div>
        <p>{info.name}</p>
        <p>{info.email}</p>
        <p>{info.staffId}</p>
        <p>{info.role}</p>
        
      </div>
      
    </div>
  )
}

export default EmployeeRender
