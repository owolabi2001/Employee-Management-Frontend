import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import RemoveEmployee from './components/RemoveEmployee';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/addEmployee' element={<AddEmployee />}></Route>
        <Route path='/removeEmployee' element={<RemoveEmployee/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
