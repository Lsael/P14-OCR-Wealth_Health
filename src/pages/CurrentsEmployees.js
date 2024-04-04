import { Link } from "react-router-dom";

const CurrentEmployees = () => {
    return (
        <div id="employee-div" class="container">
            <h1>Current Employees</h1>
            <table id="employee-table" class="display"></table>
            <Link to="/new">Home</Link>
        </div>
    );
  };
  
  export default CurrentEmployees 