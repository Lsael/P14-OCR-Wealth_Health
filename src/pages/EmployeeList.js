import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { employeesTableLabels } from "../data";
import CustomTable from "../plugins/Table/CustomTable";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees);

  return (
    <div id="employee-div" className="container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <Link to="/new">Create Employee</Link>
      <CustomTable
        title={"Current Employees"}
        id={"employee-table"}
        labels={employeesTableLabels}
        datas={employees}
        options={{
          headerFont: "white",
          headerBackground: "black",
          oddLines: "lightGray",
          oddFont: "black",
          evenLines: "gray",
          evenFont: "white",
        }}
      />
      <Link to="/new">Home</Link>
    </div>
  );
};

export default EmployeeList;
