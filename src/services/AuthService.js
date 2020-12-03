import axios from "axios";
import Cookies from 'js-cookie';
import jwtDecode from "jwt-decode";
import MainTemplate from "../components/template/MainTemplate";

const URL = "http://localhost:8080/";

class AuthService {

    login(username, password) {
        return axios
            .post(URL + "login",
                {
                username: username,
                password: password
            }, {withCredentials: true})
            .then(response => {
                console.log(response.headers.authorization.valueOf())
                if (response.status.valueOf() === 200) {
                    Cookies.set('user', response.headers.authorization.valueOf(), { expires: 7 })
                }
                console.log(response.status);
                //return response.status;
            })
            .finally()
            .catch(error => {
                console.log("login error", error);
                this.changeErrorMessage().bind(this);
            })
            ;
    }

    changeErrorMessage = () => {
        return this.setState({
            loginErrors: "Wrong Username or Password!"
        })
    };

    logout() {
        //todo remove cookie
        Cookies.remove('user')
        //localStorage.removeItem("user");
    }

    register(name, email, password) {
        return axios.post(URL + "register", {
            name,
            email,
            password
        });
    }

    getUserToken() {
        let token = Cookies.get('user');
       // let decodedUser = jwtDecode(token);
        //console.log(decodedUser);
        return token;
    }


    getCurrentUser() {
        let token = Cookies.get('user');
        //let decodedUser = jwtDecode(token);
        //console.log(decodedUser)


        return "user";
        // return JSON.parse(Cookies.get('user'));
    }
}
export default new AuthService();