import { createContext, useContext, useState} from "react";
import axios from "axios";

export const employeeContext = createContext();

export const useEmployeeContext = ()=>{ return useContext(employeeContext)} 

export const EmployeeContextProvider = ({children})=>{
    const [search, setSearch] = useState("");
    const [employeeList, setEmployeeList] = useState([]);
    const  BASE_URL= "http://localhost:8080/employee";


    const get10Employee = () =>{
        axios({
          method: "get",
          url: BASE_URL + "/getEmployee"
        }).then(
          (response) =>{
            
            
    
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

    const getEmployeByName = () =>{
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
            console.log("An error just Occured",error)
          }
        )
      }

      const employeeContextValue = {
        BASE_URL,
        search,
        setSearch,
        employeeList,
        setEmployeeList,
        getEmployeByName,
        get10Employee
        
      }

      return <employeeContext.Provider value={employeeContextValue}>{children}</employeeContext.Provider>
}
