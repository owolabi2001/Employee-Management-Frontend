import React from 'react'
import './cssForComponents/sidebar.css'

const Sidebar = () => {
  return (
    <div className='container'>
      <a href='/addEmployee'>Add Employee</a>
      <a href='/#'>Add Employees Using Excel</a>
      
      <a href='/removeEmployee'>Remove Employee</a>  
      <a>Update Employee by Name</a>  
      <a>Get Employee</a>  
      <a>Get Employee by Name</a>  
      <a>Get 1st 5 Employees</a>  
    </div>
  )
}

export default Sidebar
