import { Link } from "react-router-dom";

const EmployeeList =()=>{
    return(
        <div>
            <h2>Our Employees</h2>
<table className="table table-striped">
    <thead>
<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>Designation</th>
    <th>MobileNumber</th>
    <th>BloodGroup</th>
</tr>
    </thead>
    <tbody>
<tr>
    <td>garun</td>
    <td>garun</td>
    <td>garun</td>
    <td>garun</td>
    <td>garun</td>
    <td>garun</td>
    <td>garun</td>
    <td>
        <Link to={`/employee/12345/update`}>Edit</Link>
        <button className="btn btn-link">Delete</button>
    </td>
    

</tr>
    </tbody>
</table>

            
        </div>
    )
}
export default EmployeeList;