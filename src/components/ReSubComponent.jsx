import React from 'react'
import "./cssForComponents/reSubComponent.css"
import axios from 'axios'
import { useEffect } from 'react'

const ReSubComponent = ({item, BASE_URL}) => {
  const deleteEmployee = ()=>{
    axios.delete(BASE_URL + "/deleteEmployee",{
      params: {
        name: item.staffName
      }
    }).then((response)=>{
      alert(response.data.message)
    }).catch(
      (e)=>{
        console.log("Problem")
      }
    )
  }

  // useEffect{}

  return (
    <div className='parent'>
      <div className='sub-container'>
        <p>{item.staffName}</p>
        <button onClick={(e)=>{
          deleteEmployee()
        }}>delete</button>
      </div>

    </div>
    
  )
}

export default ReSubComponent

