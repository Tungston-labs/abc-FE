import { Route,Routes } from "react-router-dom";
import LayOut from "./Component/layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Switches from "./Pages/Switches/Switches";
import Olt from "./Pages/OLT/Olt";
import Lco from "./Pages/LCO/Lco";
import ISP from "./Pages/ISP/ISP";
import Customer from "./Pages/Customer/Customer";
import Report from "./Pages/Report/Report";
import EditSwitches from "./Pages/Switches/EditSwitches";
import AddCustomer from "./Pages/Customer/AddCustomer";
import BasicCustomerDetails from "./Pages/Customer/BasicCustomerDetails";
import Network from "./Pages/Customer/Network";
import ISPINFORMATION from "./Pages/Customer/ISPINFORMATION"
import EditCustomer from "./Pages/Customer/EditCustomer";
import Information from "./Component/Information";
import Login from "./Pages/Login/Login"
// import DeleteModal from "./Component/DeleteModal"
function App(){
  return(
<>
<Routes>
<Route path="/login" element={<Login/>}/>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Dashboard />} />
        <Route path="/switches" element={<Switches/>}/>
        <Route path="/olt" element={<Olt/>}/>
        <Route path="/lco" element={<Lco/>}/>
        <Route path="/isp" element={<ISP/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/add" element={<EditSwitches/>}/>
        <Route path="/add-customer" element={<AddCustomer/>}/>
        <Route path="/edit-customer/:id" element={<EditCustomer />} />
        <Route path="/basic-customer/:id" element={<BasicCustomerDetails />} />
        <Route path="/network/:id" element={<Network />} />
        <Route path="/isp-information/:id" element={<ISPINFORMATION />} />
        <Route path="/information" element={<Information/>}/>
        {/* <Route path="/delete" element={<DeleteModal/>}/> */}
        
      </Route>
    </Routes>
</>

  )
}
export default App;