import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./employeelist.css";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_URL}/employees`);
            setEmployees(response.data);
        }catch(error){
            console.log('Error: ', error);
        }
    }

    const handleDelete = async (employeeID) => {
        try{
            const response = await axios.delete(`${process.env.REACT_APP_URL}/employees/${employeeID}`);
            if(response){
                getEmployees();
            }
        }catch(error){
            console.log(error);
        }
    }


    return (
        <div className="employee-list">
            <h2 className="list-head">Our Employees list</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="table-head">Name</th>
                        <th className="table-head">Email</th>
                        <th className="table-head">Address</th>
                        <th className="table-head">Designation</th>
                        <th className="table-head">Mobile Number</th>
                        <th className="table-head">Blood Group</th>
                        <th className="table-head">Options</th>

                    </tr>
                </thead>
                <tbody>
                    {employees.length && employees.map((employee, index) => (
                        <tr key={index}>
                            <td className="table-body">{employee.name}</td>
                            <td className="table-body">{employee.email}</td>
                            <td className="table-body">{employee.address}</td>
                            <td className="table-body">{employee.designation}</td>
                            <td className="table-body">{employee.mobileNumber}</td>
                            <td className="table-body">{employee.bloodGroup}</td>
                            <td>
                                <Link  className="btn btn-link"  to={`/employees/${employee._id}/update`}>Edit</Link>
                                <button className="btn btn-link" onClick={() => handleDelete(employee._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList;