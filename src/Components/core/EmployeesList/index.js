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
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/employees`);
            setEmployees(response.data);
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    const handleDelete = async (employeeID) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_URL}/employees/${employeeID}`);
            if (response) {
                getEmployees();
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="employee-list">
            <h2 className="list-head">Our Employees list</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Designation</th>
                        <th>Mobile Number</th>
                        <th>Blood Group</th>

                    </tr>
                </thead>
                <tbody>
                    {employees && employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.mobileNumber}</td>
                            <td>{employee.bloodGroup}</td>
                            <td>
                                <Link className="btn btn-link" to={`/employees/${employee._id}`}>Edit</Link>
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