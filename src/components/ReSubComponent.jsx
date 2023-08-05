import React from 'react'
import "./cssForComponents/reSubComponent.css"

const ReSubComponent = ({item}) => {
  return (
    <div className='parent'>
      <div className='sub-container'>
        <p>{item.staffName}</p>
        <button>delete</button>
      </div>

    </div>
    
  )
}

export default ReSubComponent

