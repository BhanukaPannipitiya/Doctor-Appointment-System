import {BrowserRouter as Router,Route,Switch} from 'react-router';
import AddNewDoctors from './Components/AddNewDoctors';
import AppointmentHistory from './Components/AppointmentHistory';
import AppointmentSlots from './Components/AppointmentSlots';
import BookAppointment from './Components/BookAppointment';
import DoctorDashboard from './Components/DoctorDashboard';
import DoctorListForPatient from './Components/DoctorListForPatient';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PatientDashboard from './Components/PatientDashboard';
import ScheduleAppointment from './Components/ScheduleAppointment';
import ShowCurrentAppointments from './Components/ShowCurrentAppointments';
import SpecializationList from './Components/SpecializationList';

function App() {
  return (
    <div>
      <AddNewDoctors/> 
    </div>
     
    
  );
}

export default App;
