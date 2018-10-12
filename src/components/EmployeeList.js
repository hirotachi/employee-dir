import React from "react";
import Employee from "./Employee";

const EmployeeList = ({employees, term, selectedEmployee}) => (
  <div className="employee-list">
    {employees.length === 0 ?
    <span className="loading"></span>:
    employees
    .filter(employee => employee.name.first.indexOf(term.toLowerCase()) !== -1
    || employee.name.last.indexOf(term.toLowerCase()) !== -1)
    .map(employee => 
    <Employee selectedEmployee={selectedEmployee}
     key={employee.login.uuid} employee={employee}/>)}
    
  </div>
)

export default EmployeeList;