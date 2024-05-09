import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { departments, states } from "../data.js";
import Datepicker from "../plugins/Datepicker/Datepicker.js";
import Modal, { OpenFadingModal } from "../plugins/Modal/Modal.js";
import SelectMenu from "../plugins/SelectMenu/SelectMenu.js";
import { addEmployee } from "../redux/employeesSlice.js";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const statesList = states.map((e) => {
    return e.name;
  });

  const handleValidation = (e) => {
    e.preventDefault();

    OpenFadingModal("created-employee-modal", 3000);
    dispatch(addEmployee(newEmployee));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const changedEmployee = { ...newEmployee };
    changedEmployee[name] = value;
    setNewEmployee(changedEmployee);
  };

  return (
    <div className="CreateEmployee">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/currents">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={handleValidation}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={newEmployee.firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={newEmployee.lastName}
            onChange={handleInputChange}
          />

          <Datepicker
            name={"dateOfBirth"}
            label={"Date of birth"}
            value={newEmployee.dateOfBirth}
            callback={handleInputChange}
          />

          <Datepicker
            name={"startDate"}
            label={"Start Date"}
            value={newEmployee.startDate}
            callback={handleInputChange}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <SelectMenu props={statesList} name="state" />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <SelectMenu props={departments} name="department" />
        </form>

        <button>Save</button>
      </div>
      <Modal id="created-employee-modal" message={"Employee created!"} />
    </div>
  );
};

export default CreateEmployee;
