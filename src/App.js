import './App.css';
import Header from './Components/core/Header';
import Footer from './Components/core/Footer';
import EmployeeList from './Components/core/EmployeesList';
import AddEmployee from './Components/core/AddEmployee';
import UpdateEmployee from './Components/core/UpdateEmployee';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employee/add" element={<AddEmployee />} />
          <Route path='/employee/:empID/update' element={<UpdateEmployee />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
