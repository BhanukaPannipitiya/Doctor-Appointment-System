import axios from "axios";

const USER_BASE_REST_API_URL="http://123.231.9.115:8080/doctors";

class UsersService
{

    getAllUsers()
    {
        return axios.get(USER_BASE_REST_API_URL);
    }
    creatuser(user)
    {
        return axios.post(USER_BASE_REST_API_URL,user);
    }
    getuserbyid(email,password)
    {
        return axios.get(USER_BASE_REST_API_URL+'?email='+email+'password='+password);
    }

}
export default new UsersService();