import {Component} from "react";
import './header.css'

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
        return  (
            <header>
                <div className="logo">DOGMATE</div>
                {isLoginRef && <UserLogo onClick={this.changeIsAvatarClicked.bind(this)}/>}
            </header>
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