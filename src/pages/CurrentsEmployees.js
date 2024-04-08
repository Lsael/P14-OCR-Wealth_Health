import { Link } from "react-router-dom";

const CurrentEmployees = () => {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to="/new">Home</Link>
        </div>
    );
  };
  
  export default CurrentEmployees 