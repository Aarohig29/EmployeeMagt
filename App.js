//Rest Api
import EmpList from "./EmpList";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import EmpForm from "./EmpForm";
import EmpEdit from "./EmpEdit";
import EmpDetails from "./EmpDetails";

function App()
{
  return(
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<EmpList/>}/>
            <Route path="form" element={<EmpForm/>}/>
            <Route path="empedit/:empid"   element={<EmpEdit/>}/>
            <Route path="empdetail/:empid"   element={<EmpDetails/>}/>
          </Routes>
        </Router>
    </div>
  )
}
export default App;