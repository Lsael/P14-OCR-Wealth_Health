import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { departments, states } from "../data.js";
import Datepicker from "../plugins/Datepicker/Datepicker.js";
import Modal, { OpenFadingModal } from "../plugins/Modal/Modal.js";
import SelectMenu from "../plugins/SelectMenu/SelectMenu.js";
import { addEmployee } from "../redux/employeesSlice.js";

const CreateEmployee = () => {
  const dispatch = useDispatch()

  const statesList = states.map((e) => {
    return e.name;
  });

  const handleValidation = () => {
    const firstName = document.querySelector("#first-name").value
    const lastName = document.querySelector("#last-name").value
    const dateOfBirth = document.querySelector("#date-of-birth").value
    const startDate = document.querySelector("#start-date").value
    const street = document.querySelector("#street").value
    const city = document.querySelector("#city").value
    const state = document.querySelector("#state").value
    const zipCode = document.querySelector("#zip-code").value
    const department = document.querySelector("#department").value

    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      startDate: startDate,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      department: department
    }

    dispatch(addEmployee(newEmployee))
  }

  return (
    <div className="CreateEmployee">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/currents">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <Datepicker name={"date-of-birth"} label={"Date of birth"} />

          <Datepicker name={"start-date"} label={"Start Date"} />

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

        <button onClick={() => {
          OpenFadingModal("created-employee-modal", 3000)
          handleValidation()
          }}>
          Save
        </button>
      </div>
      <Modal id="created-employee-modal" message={"Employee created!"} />
    </div>
  );
};

export default CreateEmployee;
