import { Link } from "react-router-dom";
import { employeesExamples, employeesTableLabels } from "../data";
import CustomTable from "../plugins/Table/CustomTable";

const EmployeeList = () => {
  return (
    <div id="employee-div" className="container">
      <CustomTable
        title={"Current Employees"}
        id={"employee-table"}
        labels={employeesTableLabels}
        datas={employeesExamples}
      />
      <Link to="/new">Home</Link>
    </div>
  );
};

export default EmployeeList;
