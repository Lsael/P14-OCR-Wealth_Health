import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { employeesExamples } from "./data";
import { listEmployees } from "./redux/employeesSlice";

const App = () => {
  const dispatch  = useDispatch()
  dispatch(listEmployees(employeesExamples))
  
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
