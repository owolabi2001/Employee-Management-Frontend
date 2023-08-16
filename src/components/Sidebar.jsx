import React from 'react'
import './cssForComponents/sidebar.css'

const Sidebar = () => {
  return (
    <div className='container'>
      <a href='/addEmployee'>Add Employee</a>  
      <a href='/removeEmployee'>Remove Employee</a>  
      <a>Update Employee by Name</a>  
      <a>Get Employee</a>  
    </div>
  )
}

export default Sidebar
