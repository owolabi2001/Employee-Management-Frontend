import React from 'react'
import { useState } from 'react'
import {TfiSearch} from 'react-icons/tfi'
import GetEmployeeSub from './GetEmployeeSub'
import axios from 'axios'

const GetEmployee = ({BASE_URL}) => {
    const [search,setSearch] = useState("");
    

    const getEmployeByName= ()=>{
    }
  return (
    <div>
      <div className="add-container">
        <div className='flex-container'>
          <input type='text' className="search" placeholder="Search Name of Employee's here"
            value={search} onChange={(e) =>{
              setSearch(e.target.value)    
              getEmployeByName()
            }}
          />
          <button className='search-button'>
            <TfiSearch className='tfi-search' onClick={getEmployeByName}/>
          </button>
        </div>
      </div>

      <GetEmployeeSub />
      
    </div>
  )
}

export default GetEmployee
