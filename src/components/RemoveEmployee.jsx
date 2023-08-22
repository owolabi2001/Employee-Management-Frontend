
import React from 'react'
import ReSubComponent from './ReSubComponent'
import './cssForComponents/removeEmployee.css'
import { useEffect } from 'react'
import {TfiSearch} from 'react-icons/tfi'
import { useEmployeeContext } from '../EmployeeContext'


const RemoveEmployee = () => {
  const {search, setSearch, employeeList,get10Employee,getEmployeByName} = useEmployeeContext();

  
  useEffect(()=>{
    get10Employee(); 
  },[])


  
  return (
    <>
      <div className="add-container">
        <div className='flex-container'>
          <input type='text' className="search" placeholder="Search Name of Employee's here"
            value={search} onChange={(e) =>{
              setSearch(e.target.value)    
              getEmployeByName()
            }}
          />
          <button className='search-button'>
            <TfiSearch className='tfi-search' onClick={getEmployeByName()}/>
          </button>
        </div>
      </div>

      
      <div className='add-container'>
        {
          employeeList?.length > 0 ? (
            employeeList.map((employee) => (
              
              <ReSubComponent key={employee.id} item={employee}/>
            )) 
          ) : (
            <p>No Employee In the Database</p>
          )
        }

      </div>
    </>
    
    
  )
}

export default RemoveEmployee
