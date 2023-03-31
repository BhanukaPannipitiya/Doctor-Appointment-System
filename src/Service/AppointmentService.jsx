import axios from "axios";

const APPOINTMENT_API_BASE_URL = "http://172.16.101.59:8082";
class AppointmentService{
    
    
    postScheduleAppointment(appointment) {
        return axios.post(APPOINTMENT_API_BASE_URL + '/scheduleappointments' ,appointment);
      }
    getScheduleAppointment() {
        return axios.get(APPOINTMENT_API_BASE_URL + '/scheduleappointments' );
      }
    postAppointment(appointment){
        return axios.post(APPOINTMENT_API_BASE_URL + '/appointments' ,appointment);
    } 
    getAppointmentById(appointmentId) {
        return axios.get(APPOINTMENT_API_BASE_URL + '/scheduleappointments/' + appointmentId);
    } 
    getAppointment(appointment) {
        return axios.get(APPOINTMENT_API_BASE_URL + '/appointments' ,appointment);
      }
    getAppointment(appointment) {
        return axios.get(APPOINTMENT_API_BASE_URL + '/appointments' ,appointment);
      }
      deleteAppointment(appointmentId) {
        return axios.delete(APPOINTMENT_API_BASE_URL + '/appointments/' + appointmentId);
      }
}
export default new AppointmentService();