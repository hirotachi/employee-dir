import React, { Component } from "react";
import Modal from "react-modal";
import states from "us-state-codes";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

class EmployeeModal extends Component{
  render() {
    const employee = this.props.selected;
    const state = employee && states.getStateCodeByStateName(employee.location.state);
    return(
      <Modal
      isOpen={!!this.props.selected}
      contentLabel="Selected option"
      onRequestClose={this.props.handleClearSelectedOption}
      ariaHideApp={false}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="overlay"
      >
      {employee && 
        <div className="employee_modal">
          <img className="modal_avatar" 
            src={employee.picture.large} 
            alt="employee's avatar"
          />
          <div className="modal_info">
            <h3 className="modal_info-name">
              {employee.name.first} {employee.name.last}</h3>
            <p className="modal_info-email">{employee.email}</p>
            <p className="modal_info-city">{employee.location.city}</p>
            <div className="modal_info-extra">
              <p>{employee.phone}</p>
              <p>{employee.location.street}, {state} {employee.location.postcode}</p>
              <p>Birthday: {employee.dob.date.slice(2, 10).split("-").reverse().join("/")}</p>
              <span 
              className="right"
              onClick={()=> this.props.nextEmployee(employee.login.uuid)}
              ><FaChevronRight />
              </span>
              <span 
              onClick={() => this.props.prevEmployee(employee.login.uuid)}
              className="left"
              ><FaChevronLeft />
              </span>
              <span
                onClick={this.props.handleClearSelectedOption}
               className="close"
              ><FaTimes />
              </span>
            </div>
          </div>
        </div>
        }
      </Modal>
    );
  }
}

export default EmployeeModal;

