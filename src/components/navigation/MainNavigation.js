import {Component} from "react";
import home from "./img/home.js";
import dog from "./img/dog.js";
import map from "./img/map.js";
import friends from "./img/friends.js";
import messages from "./img/messages.js";
import "../../index.css"
import "./mainNavigation.css"
import {NavLink} from "react-router-dom";

export default class MainNavigation extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink to={"/home"} className={"brown"}
                             activeClassName={"turquoise"}> <div className={"link-icon"}>{home}</div> Home </NavLink>
                    <NavLink to={"/walks"} className={"brown"}
                             activeClassName={"turquoise"}> <div className={"link-icon"}>{dog}</div> Walks </NavLink>
                    <NavLink to={"/map"} className={"brown"}
                             activeClassName={"turquoise"}> <div className={"link-icon"}>{map}</div> Map </NavLink>
                    <NavLink to={"/friends"} className={"brown"}
                             activeClassName={"turquoise"}> <div className={"link-icon"}>{friends}</div> Friends </NavLink>
                    <NavLink to={"/messages"} className={"brown"}
                             activeClassName={"turquoise"}> <div className={"link-icon"}>{messages}</div> Messages </NavLink>
                </nav>
            </div>
        )
    }
}
