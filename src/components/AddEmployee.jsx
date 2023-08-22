import React from 'react'
import './cssForComponents/addEmployee.css'
import { Link,Outlet } from 'react-router-dom'

const AddEmployee = () => {
  return (
    <div >
      <div className='add-container'>
        <div className='link-div'>
          <Link className="link-container" to='form'>Add Employee</Link>
          <Link className="link-container" to='excel'>Add Employee Using CSV</Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AddEmployee
