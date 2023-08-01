import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import RemoveEmployee from './components/RemoveEmployee';

const App = () => {
  const  BASE_URL= "http://localhost:8080/employee"
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/addEmployee' element={<AddEmployee BASE_URL={BASE_URL}/>}></Route>
        <Route path='/removeEmployee' element={<RemoveEmployee BASE_URL={BASE_URL}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
