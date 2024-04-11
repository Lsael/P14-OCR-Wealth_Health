import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { employeesTableLabels } from "../data";
import CustomTable from "../plugins/Table/CustomTable";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees)
  console.log(employees);

  return (
    <div id="employee-div" className="container">
      <CustomTable
        title={"Current Employees"}
        id={"employee-table"}
        labels={employeesTableLabels}
        datas={employees}
      />
      <Link to="/new">Home</Link>
    </div>
  );
};

export default EmployeeList;
