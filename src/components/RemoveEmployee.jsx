
import React from 'react'
import ReSubComponent from './ReSubComponent'
import './cssForComponents/removeEmployee.css'
import { useState,useEffect } from 'react'
import {TfiSearch} from 'react-icons/tfi'
import axios from 'axios'


const RemoveEmployee = ({BASE_URL}) => {
  const [search, setSearch] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const list=[];
  
  
  

  const get10Employee = () =>{
    axios({
      method: "get",
      url: BASE_URL + "/getEmployee"
    }).then(
      (response) =>{
        
        let variables = response.data.data;
        
        variables.map((variable)=>{
          list.push(variable)
        })

        setEmployeeList([...employeeList, ...response.data.data]);

        // }
        console.log("employee list from the get10 function",employeeList)
      }
    ).catch(
      (error) =>{
        console.log(error)
        
      }
    )
    
  }
  
  const getEmployeByName = (e) =>{
    // e.preventDefault()
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
  useEffect(()=>{
    get10Employee();
    console.log("list",list);
    console.log("Employee List",employeeList) 
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
            <TfiSearch className='tfi-search' onClick={getEmployeByName}/>
          </button>
        </div>
      </div>

      
      <div className='add-container'>
        {
          employeeList?.length > 0 ? (
            employeeList.map((employee) => (
              
              <ReSubComponent key={employee.id} item={employee} BASE_URL={BASE_URL} />
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
