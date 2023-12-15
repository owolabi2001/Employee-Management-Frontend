import React from 'react'
import { useContext, useEffect } from 'react'
import { employeeContext } from '../EmployeeContext'
import {TfiSearch} from 'react-icons/tfi'
import GetEmployeeSub from './GetEmployeeSub'
import './cssForComponents/getEmployee.css'

const GetEmployee = () => {
    const {search,setSearch,employeeList,get10Employee,getEmployeByName} = useContext(employeeContext);

    useEffect(()=>{
      get10Employee()
      console.log(employeeList)
    },[]
    )
    

    
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
      <div className='add-container get-div'>
          {employeeList?.length>0?(
            employeeList.map(
              (employee)=>(
                <GetEmployeeSub key={employee.id} item={employee} />
              )          
            )
          ):(
            <p>No Employee Found</p>
          )
          }

    
        

      </div>
      
      
      
    </div>
  )
}

export default GetEmployee
