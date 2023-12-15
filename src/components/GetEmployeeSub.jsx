import React from 'react'
import "./cssForComponents/reSubComponent.css"

const GetEmployeeSub = ({item}) => {
  return (
    <div className='get-container'>
        <p>{item.role}</p>
        <button className='get-btn'>{item.staffName}</button>    
    </div>
  )
}

export default GetEmployeeSub
