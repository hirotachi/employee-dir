import React, { Component } from 'react';
import fetch from "node-fetch";
import "./styles/styles.scss";
// import "normalize.css/normalize.css";
import SearchBar from "./components/SearchBar";
import Employeelist from "./components/EmployeeList";
import EmployeeModal from "./components/EmployeeModal";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      employees: [],
      term: "",
      filterd: [],
      selected: undefined
    }
    fetch("https://randomuser.me/api/?results=12&nat=us")
    .then(res => res.json())
    .then(data => this.setState(() => ({employees: data.results})))
  }


  search = (e) => {
    const term = e.target.value;
    this.setState(() => ({term}));
  };

  selectedEmployee = (uuid) => {
    const selected = this.state.employees.find(employee => 
      employee.login.uuid === uuid);
        this.setState(() => ({selected}))
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({selected: undefined}))
  }

  nextEmployee = (uuid) => {
    let current = this.state.employees.find(employee => uuid === employee.login.uuid);
    let index = this.state.employees.indexOf(current);
    let next = this.state.employees[index+1] || this.state.employees[0]
    this.setState(() => ({selected: next}));
  }

  prevEmployee = (uuid) => {
    let current = this.state.employees.find(employee => uuid === employee.login.uuid);
    let index = this.state.employees.indexOf(current);
    let prev = this.state.employees[ index - 1 ] || this.state.employees[ this.state.employees.length - 1];
    this.setState(() => ({selected: prev}));
  }


  render() {
    return (
        <div className="app">
          <SearchBar term={this.state.term} search={this.search}/>
          <Employeelist 
            selectedEmployee={this.selectedEmployee}
            term={this.state.term}
            employees={this.state.employees}
          />
          <EmployeeModal 
            handleClearSelectedOption={this.handleClearSelectedOption}
            selected={this.state.selected}
            nextEmployee={this.nextEmployee}
            prevEmployee={this.prevEmployee}
          />
        </div>
    );
  }
}

export default App;
