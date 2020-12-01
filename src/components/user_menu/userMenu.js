import {Component, Link} from "react";
import './userMenu.css';

export default class userMenu extends Component {

    render() {
        return (
            <div className="user-menu-bar">
                <Link to="/user-profile" class="user-menu-link">My profile</Link>
                <Link to="/settings" class="user-menu-link">Settings</Link>
                <Link to="/logout" class="user-menu-link">Log out</Link>
            </div>
        )
    }
}