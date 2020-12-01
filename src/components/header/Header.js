import {Component} from "react";
import './header.css'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isLoginRef = this.props.isLoginRef
        return  (
            <div className={"brown-background"}>
                <header>
                    <div className="logo">DOGMATE</div>
                    {isLoginRef && <UserLogo/>}
                </header>
            </div>
        )
    }
}

const UserLogo = props => {
    return (
        <div
            className="main-avatar yellow"
            onClick={props.onClick}
        >
            <span>
                A
            </span>
        </div>
    );
};