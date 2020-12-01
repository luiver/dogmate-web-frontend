import {Component} from "react";
import './header.css'

export default class Header extends Component {

    render() {
        return  (
            <div className={"brown-background"}>
                <header>
                    <div className="logo">DOGMATE</div>
                    <div className="main-avatar yellow">
                        <span>A</span>
                    </div>
                </header>
            </div>
        )
    }
}