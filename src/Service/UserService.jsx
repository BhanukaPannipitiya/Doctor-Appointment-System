import axios from "axios";

const USER_API_BASE_URL = "http://172.16.101.63:8081";
class UserService{
    getUsers(user) {
        return axios.get(USER_API_BASE_URL + '/users' ,user);
      }
    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/getPatientDetails/' + userId);
    }
    postUsers(user) {
        return axios.post(USER_API_BASE_URL + '/users' ,user);
      }



}
export default new UserService();
