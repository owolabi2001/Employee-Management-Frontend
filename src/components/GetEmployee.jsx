import React from 'react'
import { useState } from 'react'
import {TfiSearch} from 'react-icons/tfi'

const GetEmployee = () => {
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
    </div>
  )
}

export default GetEmployee
