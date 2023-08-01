import React from 'react'
import "./cssForComponents/reSubComponent.css"

const ReSubComponent = ({item}) => {
  return (
    <div className="add-container">
      <p>{item.name}</p>
      <button>delete</button>
    </div>
  )
}

export default ReSubComponent

