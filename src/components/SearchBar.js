import React from "react";


const Searchbar  = (props) => {
  return(
    <div className="header">
    <p className="heading">AWESOME STARTUP EMPLOYEE DIRECTORY</p>
      <input type="text"
      value={props.term}
      onChange={props.search}
      placeholder="Search for Employees"
      className="search-field"
      />
    </div>
  );
}

export default Searchbar;