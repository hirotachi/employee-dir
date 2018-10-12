import React from "react";

const Employee = ({employee, selectedEmployee}) => (
  <div className="employee-card" onClick={() => selectedEmployee(employee.login.uuid)}>
    <img className="avatar" src={employee.picture.large} alt={`${employee.name.first}'s avatar`}/>
    <div className="info">
      <p className="name">{employee.name.first} {employee.name.last}</p>
      <div className="extra">
        <p className="email">{employee.email}</p>
        <p className="city">{employee.location.city}</p>
      </div>
    </div>
    
  </div>
)

export default Employee;