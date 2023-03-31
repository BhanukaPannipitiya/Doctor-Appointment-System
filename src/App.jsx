import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import DoctorListForPatient from './Components/DoctorListForPatient';

import PatientHomePage from './Pages/PatientHomePage'

import CurrentAppointment from './Pages/CurrentAppointment';
import HistoryAppointment from './Pages/HistoryAppointment';
import UpdateProfile1 from './Pages/UpdateProfile1';
import AdminDashboard1 from './Pages/AdminDashboard1';

import DoctorCurrentAppointments1 from './Pages/DoctorCurrentAppointments1';

import PatientSignUp from './Pages/Register';
import Login from './Pages/Login';
import DoctorListForAdmin1 from './Pages/DoctorListForAdmin1';
import CreateAppointmentAdmin from './Pages/CreateAppointmentAdmin';
import BookAppointment from './Components/BookAppointment';
import ScheduleAppointment from './Components/ScheduleAppointment';
import AvailableDocPg from './Pages/AvailableDocPg';

import ConfirmAppointment2 from './Components/ConfirmAppointment2';
import ShowCurrentAppointments from './Pages/ShowCurrentAppointments';
import CurrentActiveAppointments from './Pages/CurrentActiveAppointments';
import AddDoctors1 from './Pages/AddDoctors1';
import UpdateDoctor1page from './Pages/UpdateDoctor1page';
import UpdateDoctorPage2 from './Pages/UpdateDoctorPage2';




function App() {
  return (
    <div>
   <Router>
   <div>
      <Switch>CurrentAppointment
        <Route path="/A" component={PatientHomePage}/>
        <Route path="/CurrentAppointment1" component={CurrentAppointment}/>
        <Route path="/HistoryAppointment1" component={HistoryAppointment}/>
        <Route path="/UpdateProfile1" component={UpdateProfile1}/>
        <Route exact path="/" component={PatientSignUp}/>
        <Route path="/DoctorCurrentAppointments1" component={DoctorCurrentAppointments1}/>
        <Route path="/Login" component={Login}/>
        <Route path="/createAppointment" component={CreateAppointmentAdmin}/>
        <Route path="/AdminDashboard" component={AdminDashboard1}/>
        <Route path="/DoctorListForAdmin" component={DoctorListForAdmin1}/>
        <Route path="/DoctorListForPatient" component={DoctorListForPatient}/>
        <Route path="/bookAppointment/:id" component={ConfirmAppointment2}/>
        <Route path="/scheduleAppointment/:id" component={ScheduleAppointment}/>

        
        <Route path="/availableDoctorsPage" component={AvailableDocPg}/>
        <Route path="/showCurrentAppointments" component={ShowCurrentAppointments}/>
        <Route path="/currentActiveAppointments" component={CurrentActiveAppointments}/>
        <Route path="/Addnewdoctors" component={AddDoctors1}/>
        <Route path="/UpdateDoctor1page/:id" component={UpdateDoctor1page}/>
        <Route path="/UpdateDoctor2page" component={UpdateDoctorPage2}/>
        
        
        
        
       
      </Switch>
      </div>
     </Router>
    </div>
    
    
  );
}

export default App;
