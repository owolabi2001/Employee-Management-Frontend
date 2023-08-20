import React from 'react'
import './cssForComponents/sidebar.css'

const Sidebar = ({BASE_URL}) => {
  return (
    <div className='container'>
      <a href='/addEmployee'>Add Employee</a>  
      <a href='/removeEmployee'>Remove Employee</a>  
      <a href='/updateEmployee'>Update Employee by Name</a>  
      <a href='/getEmployee'>Get Employee</a>  
    </div>
  )
}

export default Sidebar
