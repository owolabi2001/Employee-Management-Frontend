
import React from 'react'
import ReSubComponent from './ReSubComponent'
import './cssForComponents/removeEmployee.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {IoAddCircle} from "react-icons"
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
        if(employeeList){
          setEmployeeList([...employeeList,response.data.data])
        }
        console.log("employee list from the get10 function",employeeList)
      }
    ).catch(
      (error) =>{
        console.log(error)
        
      }
    )
    
  }
  useEffect(()=>{
    get10Employee();
    console.log("list",list);
    console.log("Employee List",employeeList) 
  },[])


  
  return (
    <div className="add-container">
        <input type='text' className="search" placeholder="Search Name of Employee's here"
          value={search} onChange={(e) =>{
            setSearch(e.target.value)    
          }}
        />
        <p>{search}</p> 
        {
          employeeList?.length>0?(
            employeeList.map((employee)=>{
              <ReSubComponent item={employee.name} />
            })
          ) :(
            <p>No Employee In the Database</p>
          )
          
        }  
    </div>
  )
}

export default RemoveEmployee
