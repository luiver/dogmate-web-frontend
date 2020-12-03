import {Component} from "react";
import './header.css'
import {BrowserRouter, Link} from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
        this.state = {
            isLogoClicked: false,
        };
    }

    changeState() {
        this.setState(prevState => ({ isLogoClicked: !prevState.isLogoClicked  }));
    }

    changeIsAvatarClicked = (event) => {
        this.changeState();
        const {isLogoClicked} = this.state;
        this.props.isAvatarClickedCallback(!isLogoClicked);
        event.preventDefault();
    }

    render() {
        const isLoginRef = this.props.isLoginRef;
        const loggedInUser = this.props.loggedInUser;
        return  (
            <BrowserRouter>
                <header className={"brown-background"}>
                    <div className="logo">
                        <Link to={"/"}>
                            DOGMATE
                        </Link>
                    </div>
                    {loggedInUser && <UserLogo onClick={this.changeIsAvatarClicked.bind(this)}/>}
                </header>
            </BrowserRouter>

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