import React, { useState } from 'react'
import './updateEmployee.css';

const updateEmployee = () => {
  const {employeeDetails,setEmployeeDetails} = useState({
    name:"",
    email:"",
    address:"",
    designation:"",
    mobileNumber:"",
    bloodgroup:""
  })
  return (
    <div className='updateEmployee'>
      <h1>UPDATE EMPLOYEE</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input id='name' className='form-control' type='text' value='' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' className='form-control' type='text' value='' />
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>Address</label>
                    <input id='address' className='form-control' type='text' value='' />
                </div>
                <div className='form-group'>
                    <label htmlFor='designation'>Designation</label>
                    <input id='designation' className='form-control' type='text' value='' />
                </div>
                <div className='form-group'>
                    <label htmlFor='mobileNumber'>Mobile Number</label>
                    <input id='mobileNumber' className='form-control' type='text' value='' />
                </div>
                <div className='form-group'>
                    <label htmlFor='bloodgroup'>Blood Group</label>
                    <input id='bloodgroup' className='form-control' type='text' value='' />
                </div>
            </form>



    </div>
  )
}

export default updateEmployee