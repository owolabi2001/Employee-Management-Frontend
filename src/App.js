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



const App = () => {
  const  BASE_URL= "http://localhost:8080/employee"
  return (
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/addEmployee' element={<AddEmployee BASE_URL={BASE_URL}/>}>
            <Route path='form' element={<AddEmployeeSub1 />} />
            <Route path='excel' element={<AddEmployeeSub2 BASE_URL={BASE_URL} />} />
          </Route>

          <Route path='/removeEmployee' element={<RemoveEmployee   />}/>
          
          <Route path='getEmployee' element = {<GetEmployee/>}/>

          <Route path='/updateEmployee' element= {<UpdateEmploeeByName BASE_URL={BASE_URL} />}></Route>
          
        </Routes>
      </div>
  );
}

export default App;
