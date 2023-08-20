import React from 'react'
import "./cssForComponents/reSubComponent.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ReSubComponent = ({item, BASE_URL}) => {
  const redirect = useNavigate();

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

  
    


  return (
    <div className='parent'>
      <div className='sub-container'>
        <p>{item.staffName}</p>
        <button onClick={(e)=>{
          deleteEmployee()
          console.log("item Id: ",item.id)
          redirect("/getEmployee")
          
        }}>delete</button>
      </div>

    </div>
    
  )
}

export default ReSubComponent

