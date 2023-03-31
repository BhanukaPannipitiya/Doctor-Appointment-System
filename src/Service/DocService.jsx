import axios from "axios";

const ADMIN_API_BASE_URL = "http://172.16.101.59:8081";

class AddNewDocService
{

    addNewDoctor(doctor){
        console.log(doctor);
        return axios.post(ADMIN_API_BASE_URL + '/doctors',doctor);
    }
    getDoctorsBySpecialty(specialty) {
        return axios.get(ADMIN_API_BASE_URL + '/doctors' ,specialty);
      }
      getDoctorsById(id) {
        return axios.get(ADMIN_API_BASE_URL + '/doctors/' +id);
      }
      updateDoctor(id, doctor) {
        return axios.put(ADMIN_API_BASE_URL + '/doctors/' + id, doctor);
      }

      
}
export default new AddNewDocService();