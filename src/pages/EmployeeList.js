import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { employeesExamples, employeesTableLabels } from "../data";
import CustomTable from "../plugins/Table/CustomTable";
import { listEmployees } from "../redux/employeesSlice";

const EmployeeList = () => {
  const dispatch  = useDispatch()
  dispatch(listEmployees(employeesExamples))
  const employees = useSelector((state) => state.employees)

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
