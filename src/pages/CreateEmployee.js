import { Link } from "react-router-dom";
import { departments, states } from "../data.js";
import Modal, { OpenFadingModal } from "../plugins/Modal/Modal.js";
import SelectMenu from "../plugins/SelectMenu/SelectMenu.js";

const CreateEmployee = () => {
  const statesList = states.map((e) => {
    return e.name;
  });

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

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

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

        <button onClick={() => OpenFadingModal("created-employee-modal", 3000)}>Save</button>
      </div>
      <Modal id="created-employee-modal" message={"Employee created!"}/>
    </div>
  );
};

export default CreateEmployee;
