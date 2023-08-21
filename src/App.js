import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Route, Routes} from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import RemoveEmployee from './components/RemoveEmployee';
import AddEmployeeSub1 from './components/AddEmployeeSub1';
import AddEmployeeSub2 from './components/AddEmployeeSub2';
import GetEmployee from './components/GetEmployee';
import UpdateEmploeeByName from './components/UpdateEmploeeByName';
import React from 'react';
import { useState } from 'react';
import { employeeContext } from './EmployeeContext';

const App = () => {
  const  BASE_URL= "http://localhost:8080/employee"
  const [search, setSearch] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/addEmployee' element={<AddEmployee BASE_URL={BASE_URL}/>}>
          <Route path='form' element={<AddEmployeeSub1 BASE_URL={BASE_URL} />} />
          <Route path='excel' element={<AddEmployeeSub2 BASE_URL={BASE_URL} />} />
        </Route>

        <Route path='/removeEmployee' element={
          <employeeContext.Provider value={{search,setSearch,employeeList,setEmployeeList}}>
            <RemoveEmployee  BASE_URL={BASE_URL} />
          </employeeContext.Provider>

        }/>
        
        <Route path='getEmployee' element = {
          <employeeContext.Provider value={{search,setSearch,employeeList,setEmployeeList}}>
            <GetEmployee/>
          </employeeContext.Provider>
        }/>

        <Route path='/updateEmployee' element= {<UpdateEmploeeByName BASE_URL={BASE_URL} />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
