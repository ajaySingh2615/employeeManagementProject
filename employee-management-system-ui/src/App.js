import "./App.css";
import AddEmployee from "./components/AddEmployee.js";
import Navbar from "./components/Navbar.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeList from "./components/EmployeeList";

function App() {
    return (<>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<EmployeeList/>}></Route>
                <Route path="/" element={<EmployeeList/>}></Route>
                <Route path="/employeeList" element={<EmployeeList/>}></Route>
                <Route path="/addEmployee" element={<AddEmployee/>}></Route>
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;
