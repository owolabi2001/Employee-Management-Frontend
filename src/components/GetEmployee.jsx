import React from 'react'
import { useContext } from 'react'
import { employeeContext } from '../EmployeeContext'
import {TfiSearch} from 'react-icons/tfi'
import GetEmployeeSub from './GetEmployeeSub'
import axios from 'axios'

const GetEmployee = ({BASE_URL}) => {
    const {search, setSearch, employeeList, setEmployeeList} = useContext(employeeContext);
    

    const getEmployeByName= ()=>{
      console.log(BASE_URL + "/" + search)
      axios(
        {
          method: "get",
          url: BASE_URL  + "/getEployee/" + search
        }
      ).then(
        (response) =>{
          console.log(response.data)
          setEmployeeList(response.data.data);
        }
      ).catch(
        (error) =>{
          console.log("An error just Occured")
        }
      )
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
