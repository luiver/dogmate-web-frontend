import {Component} from "react";
import './avatarMenu.css'
import {Link} from "react-router-dom";

export default class AvatarMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="user-menu-bar">
                <Link to="/user-profile" class="user-menu-link">My profile</Link>
                <Link to="/settings" class="user-menu-link">Settings</Link>
                <Link to="/logout" class="user-menu-link">Log out</Link>
            </div>
        )
    }
}