import axios from "axios";

const USER_API='http://localhost:8080/api/sree'
class SreeServioces
{
    getSreeUsers(){
    return axios.get(USER_API)
    }
}
export default new SreeServioces