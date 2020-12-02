import {Component} from "react";
import './avatarMenu.css'
import {Link, Redirect} from "react-router-dom";

export default class AvatarMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logout: false
        };
    }

    logout = () =>{
        localStorage.clear("token");
        this.setState({logout: true})
    }

    render() {
        const { logout } = this.state;
        if (logout) {
            return <Redirect to={"/login"} push={true}/>
        }
        return(
            <div className="user-menu-bar">
                <Link to="/user-profile" class="user-menu-link">My profile</Link>
                <Link to="/settings" class="user-menu-link">Settings</Link>
                <Link to="/logout" class="user-menu-link" onClick={this.logout}>Log out</Link>
            </div>
        )
    }
}